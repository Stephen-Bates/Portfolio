import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer bg='primary' data-bs-theme='dark' className="mt-auto">
            <Container>
                <a href="https://linkedin.com/in/stephen-bates-3b751a86">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Stephen-Bates">
                    <FaGithub />
                </a>
                <a href="https://stackoverflow.com/users/25501184/stephen-bates">
                    <FaStackOverflow />
                </a>
                <p>Stephen Bates &copy; {new Date().getFullYear()}</p>
            </Container>
        </footer>
    );
}

export default Footer