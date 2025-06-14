import { StyledHero, StyledImg } from "../../styles/heroStyle/styledHero";
import Avatar from "../../assets/92055925.jpg";
import { Container, Typography, Grid, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Button from "../Button/Button";
import { AnimatedBackground } from "../animated/AnimatedBackGround";
import Writer from "../Writer/Writer-text";

import CV from "../../assets/CV/tiago_machado.pdf"


export const Hero = () => {


    function handleDownCV() {

        const link = document.createElement('a');
        link.href = CV
        link.download = 'tiago_machado.pdf';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    function handleEmail() {
        const email = "trsminfo@gmail.com";
        const subject = "Assunto";
        const body = "Olá, vimos seu portfólio...";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <StyledHero id="home">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position="relative" pb={3}>
                            <Box width={"150%"} position="absolute" top={-100} right={-150}>
                                <AnimatedBackground />
                            </Box>
                            <Box textAlign="center" position='relative'>
                                <StyledImg src={Avatar} alt="tiago-machado" draggable="false" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Tiago Machado</Typography>
                        <Writer text="Front-end developer" delay={120} variant="h2" color="primary.contrastText" />
                        <Box mt={4}>
                            <Grid container spacing={3} display="flex" justifyContent="center">
                                <Grid size={{ xs: 10, md: 4 }}>
                                    <Button onClick={() => handleDownCV()}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 10, md: 4 }}>
                                    <Button onClick={() => handleEmail()}>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero >
    )
}
