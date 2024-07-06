import { SectionBody, SectionHeader } from "../utils"
import ContactForm from "./ContactForm"
import { Container, Image } from "react-bootstrap"

const Contact = () => {
    return (
        <Container>
            <SectionHeader>
                Contact Me
            </SectionHeader>
            <SectionBody>
                <ContactForm />
                <Image src="src/assets/pen_and_paper.png" alt="send a message" />
            </SectionBody>
        </Container>
    )
}

export default Contact