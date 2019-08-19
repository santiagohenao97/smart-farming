import React, { Component } from "react";
import profile from "../img/profile.jpg";
import './Styles/ProfileStyle.css'
import { Link } from "react-router-dom";
class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <div className="container-fluid border border-secondary rounded  div-height">
              <h1>Información Personal</h1><hr/> <br/>
              <img
                className="img-fluid rounded-circle Logo-form mb-2"
                src={profile}
                alt="profile"
              /><br/>
              <h5>@shg97</h5>
              <h5>3128867880</h5>
              <h5>santiago.henao@hotmail.com</h5>
              <Link to={"/Home"}>
                <button className="btn btn-primary mr-2 mt-3">Volver a Home</button>
              </Link>
              <Link to={"/Password"}>
                <button className="btn btn-primary mr-2 mt-3">Cambiar contraseña</button>
              </Link>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 border border-secondary rounded mb-3 div-height">
            <div className="container">
              <h1>Información de mi Cultivo</h1><hr/><br/>
              <div className="text-justify ">
              <h5><strong>Dirección de cultivo:</strong> Calle 2 # 19-97. Vda. Smart Farming</h5>
              <h5><strong>Tipo de cultivo:</strong> Hidropónico</h5>
              <h5><strong>Hectáreas cultivadas:</strong> 2</h5>
              <h5><strong>Especies cultivadas:</strong> Lechuga, tomate</h5>
              </div>
              <div class="responsive-map-container ">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.187680216988!2d-75.66331622724901!3d6.257549827174112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442bb1c1409f45%3A0xb64fb256fe759bc7!2sVda.+La+Palma%2C+Medell%C3%ADn%2C+Antioquia!5e0!3m2!1ses-419!2sco!4v1566166957034!5m2!1ses-419!2sco" width="800" height="300" frameborder="0"  allowfullscreen></iframe>
              </div>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
