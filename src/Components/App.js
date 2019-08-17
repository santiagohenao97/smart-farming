import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login';
import './AppStyle.css'

import Try from '../Pages/Home';
import Temperature from '../Pages/Temperature';
import Light from '../Pages/Ligth';
import Crop from '../Pages/Crop';
import Nutrients from '../Pages/Nutrients';
import Pest from '../Pages/PestControl';
import Task from '../Components/TaskComponent/todo';
import Plan from '../Pages/Plan';
import Password from '../Pages/Password';
import Profile from '../Pages/Profile';

import Layout from './Layout';

const App = () => {
    return (
        
        <BrowserRouter> 

              
                <Switch>
                    <Route exact path ="/" component={Login}/>
                    <Layout>
                    
                    <Route exact path = "/Home" component={Try} />
                    <Route exact path = "/Temperature" component={Temperature} />
                    <Route exact path = "/Light" component={Light} />
                    <Route exact path = "/Crop" component={Crop} />
                    <Route exact path = "/Nutrients" component={Nutrients} />
                    <Route exact path = "/Pest" component={Pest} />
                    <Route exact path = "/Task" component={Task} />
                    <Route exact path = "/Plan" component={Plan} />
                    <Route exact path = "/Password" component={Password} />
                    <Route exact path = "/Profile" component={Profile} />
                    </Layout> 
                </Switch> 
                     
        </BrowserRouter>
    );
}
export default App;
