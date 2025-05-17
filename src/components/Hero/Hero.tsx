import { StyledHero, StyledImg } from "../../styles/heroStyle/styledHero";
import Avatar from "../../assets/92055925.jpg";
import { Button, Container, Typography, Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

export const Hero = () => {

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src={Avatar} alt="tiago-machado" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign={"center"}>Tiago Machado</Typography>
                        <Typography color="primary" variant="h2" textAlign={"center"}>Software Engineer</Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, md: 4 }} display={"flex"} justifyContent={"center"}>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <DownloadIcon />
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <EmailIcon />
                                    Contact me
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}