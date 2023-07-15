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

const router = createBrowserRouter([
    {
        path: "/",
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
