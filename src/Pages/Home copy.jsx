import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import HomeC from "../Components/HomeComponent/HomeComponent";
import SideNav from "../Components/NavBar/SideNav";


class Home extends Component {
  state = {};
  render() {
    return (
      <section id="Home">
        <div className="container-fluid  ">
            <NavBar />
        
          <div className="row">
            <div className="col-2">
              <SideNav />
            </div>
            <div className="col-md-10 col-sm-12 text-center">
              <HomeC />
            </div>
          </div>
        </div>
        
       
      </section>
    );
  }
}

export default Home;
