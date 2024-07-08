import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import pages from '../../../pages';

const Navigation = () => {
    return (
        pages.children.map(page => (
            <LinkContainer to={page.path} key={page.name}>
                <Nav.Link>{page.name}</Nav.Link>
            </LinkContainer>
        ))
    );
}

export default Navigation