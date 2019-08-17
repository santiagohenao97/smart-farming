import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Password.css'

class password extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: ''
        }
    
        this.submitHandler = this.submitHandler.bind(this)
        this.handleInput = this.handleInput.bind(this)
      }
    
      handleInput(event) {
        const target = event.target
        this.setState({
          [target.name]: target.value
        })
      }  
    
      submitHandler(event) {
        event.preventDefault()
        // do some sort of verification here if you need to
        this.props.push(`${this.state.where}/${this.state.what}`)
      }

    

    render() { 
        return ( 
       
        <>
<div className="container-fluid ">
	<div className="row">
        <div className="col-lg-3"></div>
		<div className="col-lg-6 col-sm-10">
		    
		    <h1 className="p-5">Cambio de contraseña</h1>
		    <form>
        <div className="form-group pass_show "> 
                <input type="password"  className="form-control text-dark" placeholder="Ingrese contraseña actual"/> 
            </div> 
            <label>Contraseña actual</label>
		       
            <div className="form-group pass_show"> 
                <input type="password"  className="form-control text-dark" placeholder="Ingrese nueva contraseña"/>
            </div> 
            <label>New Password</label>
		       
            <div className="form-group pass_show"> 
                <input type="password"  className="form-control text-dark" placeholder="Confirme nueva contraseña"/> 
            </div>
            </form>
            <label>Confirm Password</label> <br/>
            <Link to={'/Home'}><button className="btn btn-danger m-4  text-light " type="submit">Cancelar</button>
                
            </Link>
            <Link to={'/Home'}><button className="btn btn-success m-4  text-light" type="submit">Aceptar</button>
                
            </Link>
            
            
		</div> 
        <div className="col-lg-3"></div> 
	</div>
</div>

        </>  
    
    );
    }
}
 
export default password;