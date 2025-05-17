import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#0a192f",
        },
        secondary: {
            main: "#64ffda",
        },
    },
    typography: {
        fontFamily: "revert-layer"
    }
})

theme = responsiveFontSizes(theme);


export default theme