import { SectionHeader, SectionBody } from "../utils"
import { Container } from "react-bootstrap"
import skills from "./Skills"

const resumeLink = 'https://docs.google.com/document/d/1j5mqGO-YjwObkrAINcsfwiyrMO6UDxd7-qvI4uFxVK8/edit?usp=drive_link'

const Resume = () => {
    return (
        <Container>
            <SectionHeader>
                Resume
            </SectionHeader>
            <SectionBody>
                <p>
                    You can download a copy of my resume <a href={resumeLink} download>Here</a>
                </p>
                <h3>
                    List of skills:
                </h3>
                {skills.map((skill, key) => (
                    <p key={key}>{skill.name} {skill.icon}</p>
                ))}

            </SectionBody>
        </Container>
    )
}

export default Resume