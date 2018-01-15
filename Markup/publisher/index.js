import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {getAsyncComponent} from 'async-react-component';


const APIOnBoarding = () => import('./app/components/Apis/OnBoarding/listing');
const Indexpage = () => import('./pages/index');

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={"/apis/"} component={getAsyncComponent(APIOnBoarding)}/>
            <Route path={"/"} component={getAsyncComponent(Indexpage)}/>
        </Switch>
    </Router>
    ,
    document.getElementById("root"));