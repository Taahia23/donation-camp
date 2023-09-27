import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statictics from "../Pages/Statistics/Statictics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EachCard from "../Pages/EachCard/EachCard";


const myCreatedRoute = createBrowserRouter ([
    {
        path: "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element :<Home></Home>,
                loader :  () => fetch('/apiData.json')
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statictics></Statictics>
            },
            {
                path : "/apiData/:id",
                element : <EachCard></EachCard>,
                loader : () => fetch('/apiData.json')
            }
        ]
    }
])

export default myCreatedRoute;