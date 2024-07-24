import { SectionBody, SectionHeader } from "../utils"
import ContactForm from "./ContactForm"
import { Container, Image, Row, Col } from "react-bootstrap"

const Contact = () => {
    return (
        <Container as={"main"}>
            <SectionHeader>
                Contact Me
            </SectionHeader>
            <SectionBody className="d-flex">
                <Row>
                    <Col>
                        <ContactForm className="mx-3" />
                    </Col>
                    <Col>
                        <Image src="src/assets/pen_and_paper.png" alt="send a message" className="mx-3" />
                    </Col>
                </Row>
            </SectionBody>
        </Container>
    )
}

export default Contact