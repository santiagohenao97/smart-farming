import React, { Component } from "react";
import Chart from '../ChartComponent/ChartLine'
import { Link } from 'react-router-dom';
import './ControlComponent.css';

class Card extends Component {
    state = {};
    render() {

        const { img, seccion, estado, variable, valor, accion } = this.props.card
        return (
            <>
            <div className="container-fluid text-center mb-2">
                <div className="row p-0">
                <div className="col-lg-6 col-sm-12"><h1>{seccion}</h1>
                <img src={img}  alt="Icono" className="m-3 img-style"></img>
                <p>El estado actual del cultivo es <strong>{estado}</strong><br/></p>
                <p>{variable} es: <strong>{valor}</strong></p>
                <p>Actividad: <strong>{accion}</strong></p>
                <Link to={'/'}><button className="btn btn-primary mr-2">Volver a Home</button></Link>
                <button className="btn btn-primary">Ir a Mi Plan</button>
                </div>
                <div className="col-lg-6 col-sm-12 ">

                <Chart chartLine={this.props.chart}/>
                <button className="btn btn-primary  btn-block">Activar sistema de {seccion}</button> <br/>
                <button className="btn btn-primary btn-block">Desactivar sistema de {seccion}</button>
                </div>
                </div>
                
            </div>
            </>
            
        );
    }
}

export default Card;