import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/FormComponent/Form';
import Logo from '../img/sensor.png';




import './Styles/LoginStyle.css'



class Login extends React.Component {
    
    render(){
        return (

		<div className="bg-Login">
		    <div className="container ">
                <div className="brand">
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block "></div>
                        <div className="col-lg-8 col-sm-12 col-xs-12 ">
                            
                            <div className="register Login text-center mt-5">
                            <Form/>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block fixed-bottom ">
                            
                        </div>
                        
                        
                    </div>
                </div>
                
                
                

            </div>

        </div>
        
        );
    }
}
 
export default Login;