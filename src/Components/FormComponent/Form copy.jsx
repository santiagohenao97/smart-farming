import React, { Component } from 'react';
import './FormStyle.css';
import Login from '../../img/vegetables.png'
import { Link } from 'react-router-dom';


class Form extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <div>
            <h1 className="text-dark text-center ">Smart Farming</h1>
            <img className="m-3 img-login" src={Login} alt="Vegetables: Icon made by Freepik from www.flaticon.com"/>
        </div>
        <a className="btn btn-lg  btn-google mt-2">
        <i className="fab fa-google"></i> Sign in with Google
        </a>
        <hr className="my-4"/>
        
        <form className="ml-5 mr-5 pb-3">
            <input type="email" id="inputEmail" className="form-control mb-3 text-center" placeholder="E-mail or UserName" required/>
            <input type="password" id="inputPassword" className="form-control mb-3 text-center" placeholder="Password" required/>
            <a className="text-dark link-form text-dark">I forget my password</a><br/>
            <a href=""><button className="btn  btn-google m-2  text-dark" type="submit">Sign in</button>
                
            </a><br/>
            <a className="text-dark link-form mb-2 text-dark">Create an acount</a><br/>
        </form>
        
        </React.Fragment>
        
        
        );
    }
}
 
export default Form;