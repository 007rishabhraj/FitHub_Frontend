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

const Login = () => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({ email: "", password: "" });
    return (
        <Row>
            <Col>
                <Card md={6} bg="dark" text="white" body className="m-3">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <Form>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="email"
                            className="mt-3"
                        >
                            <Form.Control placeholder=" " />
                        </FloatingLabel>
                        <FloatingLabel
                            style={{ color: "black" }}
                            label="password"
                            className="mt-3"
                        >
                            <Form.Control
                                type={show ? "text" : "password"}
                                placeholder=" "
                            />
                        </FloatingLabel>
                        <Form.Check
                            label="Show Password"
                            checked={show}
                            onChange={() => setShow((t) => !t)}
                            className="mt-3"
                        />
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

export default Login;
