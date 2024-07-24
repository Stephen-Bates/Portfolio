import { Container } from "react-bootstrap"

const SectionHeader = ({ className, children }) => {
    return (
        <Container as={"h2"} className={`${className}`}>
            {children}
        </Container>
    )
}

export default SectionHeader