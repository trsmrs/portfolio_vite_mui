import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../components/animated/AnimationComponent";
import ProjectCard, { type ProjectCardProps } from "../../components/ProjectCard/ProjectCard";


const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto Desafio Sharenery 2022",
            subtitle: "Nov 2022 - Dez 2022",
            srcImg: "/images/logo.png",
            description: "Projeto desenvolvido para uma vaga de emprego aberta pela empresa Sharenergy em 2022. A vaga era para full-stack. Utilizando NodeJs no backend, e React no frontEnd",
            technologies: "Tecnologias: JavaScript, React, CSS, NodeJs",
            // websiteURL: "",
            codeURL: "https://github.com/trsmrs/desafio_vaga_sharEnery_2022",
        },
        {
            title: "Projeto JackExperts",
            subtitle: "Jan 2023 - Fev 2023",
            srcImg: "/images/app03.png",
            description: "Projeto desenvolvido para uma vaga de emprego aberta pela empresa Jack Experts em 2023. Uma vaga full-stack. A aplicação exigia registro de usuários com autenticação JWT, e cadastro de tarefas para cada usuário.",
            technologies: "Tecnologias: JavaScript, React, Material-UI, NodeJs/RESTful",
            // websiteURL: "",
            codeURL: "https://github.com/trsmrs/projeto_jackExperts",
        },
        {
            title: "Projeto para uso pessoal",
            subtitle: "Maio 2023 - Agosto 2023",
            srcImg: "/images/app04.png",
            description: "Projeto pensado, e desenvolvido por mim em um contexto onde trabalhei, o projeto foi para centralizar dados de clientes, procedimentos, e registros de Switches, tais como nomemclatura, host, ips, switch de borda, e etc...",
            technologies: "Tecnologias: JavaScript, React, Material-UI, NodeJs/RESTful",
            // websiteURL: "",
            codeURL: "https://github.com/trsmrs/projeto_full_stack_node_react",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    {...(project.websiteURL ? { websiteURL: project.websiteURL } : {})}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection