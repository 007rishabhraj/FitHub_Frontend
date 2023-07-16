import React from "react";
import { Carousel } from "react-bootstrap";

const Carousel_Home = () => {
    return (
        <Carousel style={{ maxHeight: "80vh", maxWidth: "100vw" }}>
            <Carousel.Item>
                <img
                    className="d-block  m-auto"
                    style={{ maxHeight: "80vh", maxWidth: "100vw" }}
                    src="https://images.everydayhealth.com/images/consisten-exercise-helps-anxiety-and-stress-1440x810.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Exercise</h3>
                    <p>&quot;Move, Sweat, and Feel Great!&quot;</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  m-auto"
                    style={{ maxHeight: "80vh", maxWidth: "100vw" }}
                    src="https://hips.hearstapps.com/hmg-prod/images/young-woman-doing-antigravity-yoga-royalty-free-image-1594827101.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Yoga</h3>
                    <p>&quot;Find Inner Peace through Yoga.&quot;</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  m-auto"
                    style={{ maxHeight: "80vh", maxWidth: "100vw" }}
                    src="https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss-1600x900.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Mental Health</h3>
                    <p>&quot;Quiet the Mind, Discover Serenity.&quot;</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousel_Home;
