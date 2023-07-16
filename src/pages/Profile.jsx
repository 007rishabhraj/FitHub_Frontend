import React, { useState } from "react";
import {
    Card,
    FloatingLabel,
    Form,
    Image,
    InputGroup,
    Row,
    Button,
} from "react-bootstrap";
console.log(import.meta.env.VITE_BACKEND);

const Profile = () => {
    const [show, setShow] = useState(false);
    return (
        <Row>
            <Card
                bg="dark"
                style={{ width: "80%" }}
                text="white"
                body
                className="my-3 mx-auto"
            >
                <h1 style={{ textAlign: "center" }}>Profile</h1>
                <Row className="d-flex justify-content-center">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU"
                        style={{
                            width: "120px",
                            height: "100px",
                            borderRadius: "50%",
                        }}
                    />
                </Row>
                <Card
                    border="secondary"
                    bg="dark"
                    text="white"
                    body
                    className="mt-3"
                    style={{ width: "80%", margin: "auto" }}
                >
                    <Form>
                        <InputGroup className="mt-3">
                            <FloatingLabel
                                style={{ color: "black" }}
                                label="Name"
                            >
                                <Form.Control placeholder=" " />
                            </FloatingLabel>
                            <Button variant="outline-info">Change Name</Button>
                        </InputGroup>
                    </Form>
                    <Form>
                        <InputGroup className="mt-3">
                            <FloatingLabel
                                style={{ color: "black" }}
                                label="Email"
                            >
                                <Form.Control type="email" placeholder=" " />
                            </FloatingLabel>
                            <Button variant="outline-info">Change Email</Button>
                        </InputGroup>
                    </Form>
                </Card>

                <Card
                    border="secondary"
                    bg="dark"
                    text="white"
                    body
                    className="mt-3"
                    style={{ width: "80%", margin: "auto" }}
                >
                    <Card.Title>Change Password</Card.Title>
                    <Form>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="Current Password"
                            className="mt-3"
                        >
                            <Form.Control placeholder=" " />
                        </FloatingLabel>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="New Password"
                            className="mt-3"
                        >
                            <Form.Control
                                placeholder=" "
                                type={show ? "text" : "password"}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="Confirm Password"
                            className="mt-3"
                        >
                            <Form.Control
                                placeholder=" "
                                type={show ? "text" : "password"}
                            />
                        </FloatingLabel>
                        <Form.Check
                            label="Show Password"
                            className="mt-3"
                            checked={show}
                            onChange={() => setShow((t) => !t)}
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="mt-3"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Card>
        </Row>
    );
};

export default Profile;
