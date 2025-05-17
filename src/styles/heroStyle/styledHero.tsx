import { styled } from "@mui/material";


export const StyledHero = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center"

}))

export const StyledImg = styled("img")(({theme}) => ({
    borderRadius: "50%",
    width: "80%",
    border: `1px solid ${theme.palette.secondary.light}`,
    
}))

export const StyledButton = styled("button")(({ theme }) => ({
    gap: 10,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main
    }
}))