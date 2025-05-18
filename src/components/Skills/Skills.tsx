import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { StyledSkills } from "../../styles/heroStyle/styledHero";
import { Box, Container, Grid, Typography } from "@mui/material";
import theme from "../../theme";

function Skills() {
    const icons = [
        { icon: <FaHtml5 />, label: "Html5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <BiLogoTypescript />, label: "TypeScript" },
        { icon: <SiNestjs />, label: "NestJs" },
    ];

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Typography
                    color="primary.contrastText"
                    variant="h2"
                    textAlign="center"
                    pt={4}
                    pb={1}
                >
                    Skills
                </Typography>
                <Box
                    id="skills"
                    pt={5}
                    pb={3}
                    alignItems="center"
                    color={theme.palette.secondary.main}
                    
                >
                    <Grid
                        container
                        spacing={1}
                        justifyContent="center"
                        
                    >
                        {icons.map(({ icon, label }, index) => (
                            <Grid size={{ xs: 6, sm: 3 }} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "transform 0.3s",
                                        "& svg": {
                                            fontSize: 100,
                                            transition: "transform 0.3s",
                                        },
                                        "&:hover svg": {
                                            transform: "scale(1.1)",
                                        },
                                    }}
                                >
                                    {icon}
                                    <Typography textAlign="center">{label}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </StyledSkills>
    );
}
export default Skills;