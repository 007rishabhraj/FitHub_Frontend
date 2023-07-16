import React from "react";
import Carousel_Home from "../components/Carousel_Home";
import Home_Components from "../components/Home_Components";

const obj = [
    {
        image: "https://www.inspireusafoundation.org/wp-content/uploads/2023/02/negative-push-up-starting-position-1024x837.png",
        title: "Push Ups",
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811",
        title: "Squats",
    },
    {
        image: "https://www.burnthefatinnercircle.com/members/images/826.png?cb=20230607034533",
        title: "Plank",
    },
    {
        image: "https://clipart-library.com/image_gallery/565935.jpg",
        title: "Burpees",
    },
    {
        image: "https://clipart-library.com/image_gallery/565935.jpg",
        title: "Burpees",
    },
    {
        image: "https://clipart-library.com/image_gallery/565935.jpg",
        title: "Burpees",
    },
];
const yoga = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPc6EpFyB0IymArw39L_sgHXseihbUsdqWBQ&usqp=CAU",
        title: "Downward Facing Dog (Adho Mukha Svanasana)",
    },
    {
        image: "data:image/jpeg;base64,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",
        title: "Mountain Pose (Tadasana)",
    },
    {
        image: "https://pocketyoga.com/assets/images/full/WarriorI_R.png",
        title: "Warrior I (Virabhadrasana I)",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/60e5c853ee4f9c25cf40ebc5/1629502886411-2VY5VHXKHO4X0Q05ZKRN/tree.png",
        title: "Tree Pose (Vrksasana)",
    },
    {
        image: "https://pocketyoga.com/assets/images/full/triangle_forward_R.png",
        title: "Triangle Pose (Trikonasana)",
    },
    {
        image: "https://media.istockphoto.com/id/1264822134/vector/vector-illustration-of-yoga-pose.jpg?s=612x612&w=0&k=20&c=HhRxmPiXzryeaI9rIh6BnE2kc3EzlWWoYCyTVknNNqs=",
        title: "Child's Pose (Balasana)",
    },
];

const Home = () => {
    return (
        <>
            <Carousel_Home />
            <Home_Components Name={"Exercise"} obj={obj} />
            <Home_Components Name={"Yoga"} obj={yoga} />
        </>
    );
};

export default Home;
