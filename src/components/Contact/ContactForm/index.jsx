import { Form, Button } from "react-bootstrap";

import { useState } from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    // onChange={handleChange}
                    placeholder="Enter name"
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    // onChange={handleChange}
                    placeholder="Enter email"
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                    name="message"
                    as="textarea"
                    rows={3}
                    // onChange={handleChange}
                    placeholder="Send me a message"
                    required />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm