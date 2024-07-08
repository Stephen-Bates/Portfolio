import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-auto bg-primary bg-gradient">
            <IconContext.Provider value={{}}>
                <div>
                    <a href="https://linkedin.com/in/stephen-bates-3b751a86">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Stephen-Bates">
                        <FaGithub />
                    </a>
                    <a href="https://stackoverflow.com/users/25501184/stephen-bates">
                        <FaStackOverflow />
                    </a>
                </div>
            </IconContext.Provider>
            <p>Stephen Bates &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer