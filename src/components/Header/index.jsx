import Navigation from './Navigation';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar fixed='top'>
            <LinkContainer to="/">
                <Navbar.Brand>
                    Stephen Bates
                </Navbar.Brand>
            </LinkContainer>
            <Nav>
                <Navigation />
            </Nav>
        </Navbar>
    );
};

export default Header;