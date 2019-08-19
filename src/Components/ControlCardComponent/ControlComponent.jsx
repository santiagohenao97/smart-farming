import React, { Component } from "react";
import Chart from "../ChartComponent/ChartLine";
import { Link } from "react-router-dom";

import "./ControlComponent.css";

class Card extends Component {
  state = {};
  render() {
    const { img, seccion, estado, variable, valor, accion, etapa } = this.props.card;
    return (
      <>
        <div className="container-fluid  mb-2">
          <div className="row p-0">
            <div className="col-lg-6 col-sm-12 ">
              <h1>{seccion}</h1>
              <img src={img} alt="Icono" className="m-3 img-style" />
              <p>El cultivo se encuentra en etapa: <strong>{etapa}</strong></p>
              <p>
                El estado actual del cultivo es: <strong>{estado}</strong>
                <br />
              </p>
              <p>
                {variable} es: <strong>{valor}</strong>
              </p>
              <p>
                Actividad: <strong>{accion}</strong>
              </p>
              <Link to={"/Home"}>
                <button className="btn btn-primary mr-2">Volver a Home</button>
              </Link>
              <Link to={'/Plan'}>
              <button className="btn btn-primary">Ir a Mi Plan</button>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <Chart chartLine={this.props.chart} />
              <button
                type="button"
                class="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#controlsistema"
              >
                Activar sistema de {seccion}
              </button>{" "}
              <br />
              <button
                type="button"
                class="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#controlsistema"
              >
                Desactivar sistema de {seccion}
              </button>
              <div
                class="modal fade"
                id="controlsistema"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="controlsistema">
                        Control de sistema
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">¿Deseas continuar?</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
