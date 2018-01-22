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

import React, {Component} from 'react';
import Header from '../../../Base/Header/Header';
import LeftDrawer from '../../../Base/Drawer/LeftDrawer';
import Footer from '../../../Base/Footer/Footer';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import './apicreateswagger.css';

class ApiCreateSwagger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftDrawer: false,
            open: false,
        }
    };

    handleHamberger = (leftValue) => {
        this.setState({leftDrawer: leftValue});
    };

    render(){
        return(
            <div>
                <Header onSelectHamberger={this.handleHamberger}/>
                <LeftDrawer left={this.state.leftDrawer}/>
                <Grid container className='api-create' spacing={0}>
                    <Grid item xs={2} className='first-row'>
                    </Grid>
                    <Grid item xs={8} className='main-col'>
                        <Typography type="display1" className='text-welcome'>
                            Design new REST API with Swagger
                        </Typography>
                        <Card className='api-create'>
                            <CardContent>
                                <Typography >API create</Typography>

                            </CardContent>
                            <CardActions>
                                <Button dense>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className='first-row'>

                    </Grid>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default ApiCreateSwagger;