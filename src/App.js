import React from 'react'

import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import ForgotPassword from './components/forgetpassword';
import ShoppingBasket from './components/Shopping basket/SantaLucia';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";


function App() {

    return (
        
        <div>
             <ShoppingBasket />
             <Login /> 
             
        </div>
    
    
    )
}


export default App;