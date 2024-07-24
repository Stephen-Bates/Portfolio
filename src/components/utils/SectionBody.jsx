import { Container } from "react-bootstrap"

const SectionBody = ({ className, children }) => {
    return (
        <Container as={"section"} className={`d-flex flex-column ${className}`}>
            {children}
        </Container>
    )
}

export default SectionBody