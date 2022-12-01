import { createBrowserRouter } from "react-router-dom"
import DeshBoradLayout from "../../Pages/DashBorad/ DeshBoradLayout"
import Main from "../../Layout/Main"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import AllCategori from "../../Pages/Home/AllCategori/AllCategori"
import Blog from "../../Pages/Home/Blog/Blog"
import Home from "../../Pages/Home/DataInfo/Home"
import Login from "../../Pages/Login/Login"
import MyOrders from "../../Pages/MyOrders/MyOrders"
import Singup from "../../Pages/Singup/Singup"
import AddProduct from "../../Pages/DashBorad/DeshBorad/AddProduct/AddProduct"
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes"
import MyProduct from "../../Pages/DashBorad/DeshBorad/MyProduct/MyProduct"
import AllSeller from "../../Pages/DashBorad/AllSeller/AllSeller"
import AllBuyer from "../../Pages/DashBorad/AllBuyer/AllBuyer"




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
                loader: ({ params }) => fetch(`https://awel-headphone-server.vercel.app/categoryOptions/${params.id}`),
                element: <AllCategori></AllCategori>

            },

            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/deshBorad',
        element: <PrivetRoutes><DeshBoradLayout></DeshBoradLayout></PrivetRoutes>,
        children: [

            {
                path: '/deshBorad/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/deshBorad/myOrders',
                element: <MyOrders></MyOrders>
            },

            {
                path: '/deshBorad/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/deshBorad/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/deshBorad/allBuyer',
                element: <AllBuyer></AllBuyer>
            }

        ]
    },

])