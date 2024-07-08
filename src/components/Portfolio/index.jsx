import { SectionBody, SectionHeader } from "../utils"
import { Container } from "react-bootstrap"
import ProjectList from "./ProjectList"
import Project from "./Project"

const Portfolio = () => {
    return (
        <Container>
            <SectionHeader>
                Portfolio
            </SectionHeader>
            <SectionBody>
                <p>
                    These are some of the projects I&apos;ve worked on
                </p>
                {ProjectList.map((project, key) => (
                    <Project {...project} key={key} />
                ))}
            </SectionBody>
        </Container>
    )
}

export default Portfolio