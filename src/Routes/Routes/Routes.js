import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import AllCategori from "../../Pages/Home/AllCategori/AllCategori"
import Blog from "../../Pages/Home/Blog/Blog"
import Home from "../../Pages/Home/DataInfo/Home"
import Login from "../../Pages/Login/Login"
import MyOrders from "../../Pages/MyOrders/MyOrders"
import Singup from "../../Pages/Singup/Singup"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/allCategory/:id',
                loader: ({ params }) => fetch(`http://localhost:5001/categoryOptions/${params.id}`),
                element: <AllCategori></AllCategori>

            },
            {
                path: '/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])
