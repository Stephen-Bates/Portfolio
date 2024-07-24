import Navigation from './Navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header className='mb-5 justify-content-between border-bottom'>
            <Navbar bg='primary' data-bs-theme='dark' expand='sm' >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Stephen Bates
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <Navigation />
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;