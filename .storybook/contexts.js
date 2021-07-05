import { ThemeProvider } from "styled-components"
import { themes } from "../src/components/styles"

export const contexts = [
    {
        icon: "box",
        title: "Themes",
        components: [ThemeProvider],
        params: [
            {
                name: "Default theme",
                props: { theme: themes.light, default: true }
            },
            {
                name: "Dark theme",
                props: { theme: themes.dark}
            }
        ],
        options: {
            deep: true,
            disable: false,
            cancelable: false
        }
    }
]
