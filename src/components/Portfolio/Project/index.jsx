import { Card } from "react-bootstrap"

const Project = ({ title, description, img, address }) => {
    return (
        <a href={address} target="_blank" style={{ textDecoration: 'none' }}>
            <Card bg="secondary" border='dark' className='shadow-lg'>
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Img src={img} style={{ height: '20rem', objectFit: 'cover', objectPosition: '50% 0' }} />
            </Card>
        </a>
    )
}

export default Project