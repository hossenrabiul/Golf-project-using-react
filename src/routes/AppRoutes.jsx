import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../components/Homepage";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import ShopNow from "../components/ShopNow";
import Details from "../components/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Cart from "../components/Cart";
import ProtectedRoute from "../components/ProtectedRoute";
import Payment from "../pages/Payment";
import PlanDetails from "../components/PlanDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },{
                path: 'about',
                element: <About></About>
            },{
                path: 'contactus',
                element: <ContactUs></ContactUs>
            },{
                path: 'shopnow',
                element: <ShopNow></ShopNow>
            },{
                path: 'details/:id',
                loader: ({params})=> fetch(`https://sporting-server-phi.vercel.app/posts/postdetail/${params.id}/`),
                element: <Details></Details>
            },{
                path: 'shoppingcart',
                element: <Cart></Cart>
            },{
                path: 'planDetails/:id',
                element: <PlanDetails></PlanDetails>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },{
        path: '/register',
        element: <Register></Register>
    },{
        path: '/logout',
        element: <Logout></Logout>

    },{
        path: '/payment',
        element: <ProtectedRoute><Payment></Payment></ProtectedRoute>
    }

])

export default router