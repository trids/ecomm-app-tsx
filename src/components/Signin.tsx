import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

function Signin() {
    return (
        <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">First Name </InputGroup.Text>
                <Form.Control
                    aria-label="firstName"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Last Name </InputGroup.Text>
                <Form.Control
                    aria-label="lastName"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Email </InputGroup.Text>
                <Form.Control
                    aria-label="email"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
        </div>
    )
}

export default Signin;