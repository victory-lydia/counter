import { createBrowserRouter } from "react-router-dom"
import Signup from "../signup"
import Login from "../login"
import App from "../../App"
import ForgotPassword from "../forgetpassword"
import ShoppingBasket from "../Shopping basket/SantaLucia"
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";


const routes = [
    {
        path: '/',
        element: Login,
    },
{
    path: '/signup',
    element: Signup,
},
{
    path: '/forgetpassword',
    element: ForgotPassword,
},
{
    path: '/SantaLucia',
    element: ShoppingBasket,
},

]

export const routerConfig = createBrowserRouter(routes)