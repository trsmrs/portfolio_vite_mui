import { styled } from "@mui/material";


export const StyledHero = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    border: "1px solid red",
    [theme.breakpoints.up('xs')]: {
        display: "block",
        padding: "20px",
        paddingTop: "100px",
        paddingBottom: "40px",
     
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        height: "100vh"
    },
}));


export const StyledImg = styled("img")(({ theme }) => ({
    borderRadius: "50%",
    width: "80%",
    border: `1px solid ${theme.palette.secondary.light}`,

}))

export const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    gap: "10px",
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    border: `1px solid  ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    }
}))