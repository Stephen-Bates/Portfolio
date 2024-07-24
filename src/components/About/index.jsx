import { SectionBody, SectionHeader } from "../utils"
import { Container } from "react-bootstrap"

const About = () => {
    return (
        <Container as={"main"}>
            <SectionHeader>
                About Me
            </SectionHeader>
            <SectionBody>
                <p>
                    I&apos;m a Fullstack developer who has been studying computers since highschool.
                    In my early years, I would spend my free time independently developing video games.
                    As I grew older, I became very interested in manufacturing and spent several years working in factories, learning everything I could about the trade and the types of machinery use therein.
                    Now, I find myself pulled back to where I always felt most comfortable, in the computer sciences.
                </p>
                <p>
                    I wonder, what new technologies I&apos;ll learn about next?
                </p>
            </SectionBody>
        </Container>
    )
}

export default About