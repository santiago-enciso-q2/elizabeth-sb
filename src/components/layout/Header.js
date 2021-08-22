import React, {useEffect, useRef, useState} from "react";
import {menuData} from "../../data/menuData";
import {Link} from "react-router-dom";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltip";
import hamburgerSVG from "../../static/images/icons/hamburger.svg";
import Icon from "../styles/Icon";
import {primaryFont, colors} from "../styles";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const toolTipRef = useRef();

    function handleClick(event) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    function handleClickOutside(event) {
        if (
            ref.current &&
            !ref.current.contains(event.target) &&
            !toolTipRef.current.contains(event.target)
        ) {
            console.log("Document is clicked");
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Wrapper>
            <Link to="/">
                <Icon name="image" color={colors.primary100}/>
            </Link>
            <MenuWrapper count={menuData.length} ref={ref}>
                {menuData.map((item, index) =>
                    item.link === "/account" ? (
                        <MenuButton
                            item={item}
                            key={index}
                            onClick={(event) => handleClick(event)}
                        />
                    ) : (
                        <MenuButton item={item} key={index}/>
                    )
                )}
                <HamburgerWrapper>
                    <MenuButton
                        item={{title: "", icon: hamburgerSVG, link: ""}}
                        onClick={(event) => handleClick(event)}
                    />
                </HamburgerWrapper>
            </MenuWrapper>
            <div ref={toolTipRef}>
                <MenuTooltip isOpen={isOpen}/>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 90%;
  justify-content: space-between;
  font-family: ${primaryFont};
  color: black;
  padding: 0 30px;
  align-items: center;
  border: 3px solid ${colors.primary100};
  border-radius: 5px;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }

    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
