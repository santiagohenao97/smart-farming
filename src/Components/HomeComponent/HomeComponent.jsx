import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import temp from './img/temperature.png';
import bulb from './img/bulb.png';
import sprinkler from './img/sprinkler.png';
import seed from './img/seed-bag.png';
import plant from './img/leaf.png';
import plan from './img/analytics.png';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            
                <section id="Home">
                <div className="container text-center">
                    <h1 className="text-center">Mi cultivo</h1>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Temperature'}><figure className="figure">
                                <img src={temp} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Temperatura</figcaption>
                            </figure>
                        </Link>   
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Light'}><figure className="figure">
                                <img src={bulb} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Luminosidad</figcaption>
                            </figure>
                        </Link>    
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Crop'}>   <figure className="figure">
                                <img src={sprinkler} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Riego</figcaption>
                            </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Nutrients'}>    <figure className="figure">
                                <img src={seed} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Nutrientes</figcaption>
                            </figure>
                        </Link>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Pest'}>    <figure className="figure">
                                <img src={plant} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Control de Plagas</figcaption>
                            </figure>
                        </Link>   
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Link to={'/Plan'}>    <figure className="figure">
                                <img src={plan} className="figure-img img-fluid img-style" alt="A generic square placeholder image with rounded corners in a figure."/>
                                <figcaption className="figure-caption">Mi plan</figcaption>
                            </figure>
                        </Link>   
                        </div>
                        

                    </div>
                

                </div>
              
                
                
                
                </section>

           
         );
    }
}
 
export default Main;