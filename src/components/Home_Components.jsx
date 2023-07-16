/* eslint-disable react/prop-types */
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home_Components = ({ Name, obj }) => {
    return (
        <>
            <h1
                className="mt-3"
                style={{
                    color: "white",
                    textAlign: "center",
                    textTransform: "uppercase",
                }}
            >
                {Name}
            </h1>
            <Col
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "80vw",
                    margin: "auto",
                }}
            >
                {obj.map((item, i) => (
                    <Card
                        as={Link}
                        to={`/${i}`}
                        key={i}
                        bg="dark"
                        text="white"
                        border="secondary"
                        body
                        style={{
                            Width: "300px",
                            margin: "10px auto",
                            textTransform: "none",
                        }}
                    >
                        <Card.Img
                            src={item.image}
                            style={{ height: "150px", width: "150px" }}
                        />
                        <Card.Title
                            style={{
                                width: "150px",
                            }}
                        >
                            {item.title}
                        </Card.Title>
                    </Card>
                ))}
            </Col>
        </>
    );
};

export default Home_Components;
