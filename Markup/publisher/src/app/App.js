/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {getAsyncComponent} from 'async-react-component';


const APIOnBoarding = () => import('./components/Apis/OnBoarding/listing');
const Indexpage = () => import('../pages/index');
const Login = () => import('./components/Login/login');
const APIListing = () => import('./components/Apis/Listing/Listing');
const APICreate = () => import('./components/Apis/Create/ApiCreate');
const APIDetails = () => import('./components/Apis/Details/Details');
const APICreateSwagger = () => import('./components/Apis/Create/Swagger/ApiCreateSwagger');

class Publisher extends  Component  {

    render(){
        return(
            <Router basename="/publisher">
                <Switch>
                    <Route path={"/login"} component={getAsyncComponent(Login)}/>
                    <Route path={"/create/swagger"} component={getAsyncComponent(APICreateSwagger)}/>
                    <Route path={"/create"} component={getAsyncComponent(APICreate)}/>
                    <Route path={"/details"} component={getAsyncComponent(APIDetails)}/>
                    <Route path={"/apis/listing"} component={getAsyncComponent(APIListing)}/>
                    <Route path={"/apis"} component={getAsyncComponent(APIOnBoarding)}/>
                    <Route path={"/"} component={getAsyncComponent(Indexpage)}/>
                </Switch>
            </Router>
        );
    };
}

export default Publisher;