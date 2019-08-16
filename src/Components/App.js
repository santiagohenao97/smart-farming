import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Form from '../Pages/Login';
import './AppStyle.css'

import Try from '../Pages/Home';
import Temperature from '../Pages/Temperature';
import Light from '../Pages/Ligth';
import Crop from '../Pages/Crop';
import Nutrients from '../Pages/Nutrients';
import Pest from '../Pages/PestControl';
import Task from '../Components/TaskComponent/todo';

import Layout from './Layout';

const App = () => {
    return (
        
        <BrowserRouter> 
            <Layout>   
                <Switch>
                    <Route exact path = "/" component={Try} />
                    <Route exact path = "/Temperature" component={Temperature} />
                    <Route exact path = "/Light" component={Light} />
                    <Route exact path = "/Crop" component={Crop} />
                    <Route exact path = "/Nutrients" component={Nutrients} />
                    <Route exact path = "/Pest" component={Pest} />
                    <Route exact path = "/Task" component={Task} />
                </Switch> 
            </Layout>          
        </BrowserRouter>
    );
}
export default App;
