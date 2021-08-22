import homeIcon from "../static/images/icons/home.svg";
import emailImage from "../static/images/icons/email.svg";
import phoneImage from "../static/images/icons/phone.svg";
import searchImage from "../static/images/icons/search.svg";
import profileImage from "../static/images/icons/profile.svg";
import settingsImage from "../static/images/icons/gear.svg";
import linkImage from "../static/images/icons/link.svg";

export const menuData = [
    {title: "Home", icon: `${homeIcon}`, link: "/"},
    {title: "Email", icon: `${emailImage}`, link: "/email"},
    {title: "Call", icon: `${phoneImage}`, link: "/call"},
    {title: "", icon: `${searchImage}`, link: "/search"},
    {title: "", icon: `${profileImage}`, link: "/account"},
];

export const toolTipData = [
    {title: "Profile", icon: `${profileImage}`, link: "/profile"},
    {title: "Settings", icon: `${settingsImage}`, link: "/settings"},
    {title: "Sign Out", icon: `${linkImage}`, link: "/signout"},
];
