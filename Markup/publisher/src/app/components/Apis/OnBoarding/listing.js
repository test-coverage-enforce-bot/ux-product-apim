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
import Header from '../../Base/Header/Header';
import LeftDrawer from '../../Base/Drawer/LeftDrawer';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import './listing.css';
import { Link } from 'react-router-dom';

class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftDrawer: false
        }
    }

    handleHamberger = (leftValue) => {
        this.setState({leftDrawer: leftValue});
    }

    render() {
        return(
            <div>
                <Header onSelectHamberger={this.handleHamberger}/>
                <LeftDrawer left={this.state.leftDrawer}/>
                <Grid container className='api-listing' spacing={0}>
                    <Grid item xs={12} >
                        <Grid container  alignItems="center"  direction="column"  justify="center" spacing={0}>
                            <Grid item xs={4} className='first-row'>
                            </Grid>
                            <Grid item xs={4} className='container-row' align="center">
                                <Typography type="display3" className='text-gutter text-welcome'>
                                    Welcome to WSO2 API Manager
                                </Typography>
                                <Typography type="subheading" gutterBottom align="center">
                                    Open source solution for creating, publishing and managing all aspects of an API and its lifecycle.
                                </Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Card className='card-onboard'>
                                            <CardContent className='card-content'>
                                                <Typography type="headline" component="h2" align="left" className='card-title'>
                                                    Create New API
                                                </Typography>
                                                <Typography component="p" align="left">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button dense color="primary" component={Link} to="/create">
                                                    Create
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card className='card-onboard'>
                                            <CardContent className='card-content'>
                                                <Typography type="headline" component="h2" align="left" className='card-title'>
                                                    Deploy Sample
                                                </Typography>
                                                <Typography component="p" align="left">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button dense color="primary">
                                                    Deploy
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item className='container-row'>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    };
}

export default Listing;
