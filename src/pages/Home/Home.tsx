import { Hero } from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import ProjectsSection from "../Projects/Projects";
import "../../index.css"
import Skills from "../../components/Skills/Skills";

export function Home() {

    return (
        <div className="app">
            <Nav />
            <Hero />
            <ProjectsSection />
            <Skills />
        </div>
    )
}