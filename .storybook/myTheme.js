import { create } from "@storybook/theming/create";
import {themes, primaryFont} from "../src/components/styles";
import heartIcon from "../src/static/images/logos/heart-icon.svg"

export default create({
    base: "light",

    colorPrimary: `${themes.light.button.primaryColor}`,
    colorSecondary: "deepskyblue",

    // UI
    appBg: "white",
    appContentBg: "white",
    appBorderColor:`${themes.light.button.primaryColor}`,
    appBorderRadius: 4,

    // Typography
    fontBase: `${primaryFont}`,
    fontCode: "monospace",

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: "white",
    barSelectedColor: "white",
    barBg: `${themes.light.button.primaryColor}`,

    // Form colors
    inputBg: "white",
    inputBorder: "silver",
    inputTextColor: "black",
    inputBorderRadius: 4,

    // bradTitle not showing up because brandImage is too large
    brandTitle: "Elizabeth Design System 💇‍♀️ ",
    brandUrl: "https://github.com/santiago-enciso-q2/",
    // brandImage: `${heartIcon}`
});
