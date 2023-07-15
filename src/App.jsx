import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Home,
    Login,
    Signup,
    Yoga,
    Calorie,
    Exercise,
    Scores,
    MentalHealth,
    Profile,
} from "./pages";
import Header from "./components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            { index: true, element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/yoga", element: <Yoga /> },
            { path: "/calorie", element: <Calorie /> },
            { path: "/exercise", element: <Exercise /> },
            { path: "/scores", element: <Scores /> },
            { path: "/mentalhealth", element: <MentalHealth /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
