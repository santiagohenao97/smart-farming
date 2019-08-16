import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import HomeC from "../Components/HomeComponent/HomeComponent";
import SideNav from "../Components/NavBar/SideNav";


class Home extends Component {
  state = {};
  render() {
    return (
      <section id="Home">
        
              <HomeC />
           
      </section>
    );
  }
}

export default Home;
