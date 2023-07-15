import React, { useState } from "react";
import {
    Button,
    Card,
    Col,
    FloatingLabel,
    Form,
    Image,
    Row,
} from "react-bootstrap";
import svg from "../images/undraw_secure_login_pdn4.svg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: true,
    });
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col>
                <Card md={6} bg="dark" text="white" body className="m-3">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                    <Form>
                        <FloatingLabel
                            style={{ color: "black" }}
                            className="mt-3"
                            label="Name"
                        >
                            <Form.Control
                                value={input.name}
                                onInput={(e) =>
                                    setInput((t) => {
                                        return { ...t, name: e.target.value };
                                    })
                                }
                                placeholder=" "
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="email"
                            className="mt-3"
                        >
                            <Form.Control
                                placeholder=" "
                                value={input.email}
                                onInput={(e) =>
                                    setInput((t) => {
                                        return { ...t, email: e.target.value };
                                    })
                                }
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="password"
                            className="mt-3"
                        >
                            <Form.Control
                                type={show ? "text" : "password"}
                                value={input.password}
                                onInput={(e) =>
                                    setInput((t) => {
                                        return {
                                            ...t,
                                            password: e.target.value,
                                        };
                                    })
                                }
                                placeholder=" "
                                required
                            />
                        </FloatingLabel>
                        <Form.Check
                            label="Show Password"
                            checked={show}
                            onChange={() => setShow((t) => !t)}
                            className="mt-3"
                        />
                        <Form.Group>
                            <Form.Text style={{ color: "white" }}>
                                Gender
                            </Form.Text>
                            <Form.Group className="d-flex gap-5">
                                <Form.Check
                                    label="male"
                                    checked={input.gender}
                                    onChange={() =>
                                        setInput((t) => {
                                            return { ...t, gender: true };
                                        })
                                    }
                                />
                                <Form.Check
                                    label="female"
                                    checked={!input.gender}
                                    onChange={() =>
                                        setInput((t) => {
                                            return { ...t, gender: false };
                                        })
                                    }
                                />
                            </Form.Group>
                        </Form.Group>
                        <Button type="submit" className="my-3">
                            Submit
                        </Button>
                    </Form>
                    <GoogleOAuthProvider clientId="809388333953-mp4ic4ssmigroi4aa1oi98opm2u0cgjt.apps.googleusercontent.com">
                        <GoogleLogin />
                    </GoogleOAuthProvider>
                </Card>
            </Col>
            <Col
                md={6}
                className="d-flex justify-content-center align-items-center overflow-hidden"
            >
                <Image width={"80%"} src={svg} />
            </Col>
        </Row>
    );
};

export default Signup;
