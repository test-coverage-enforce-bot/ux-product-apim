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
import { Link } from 'react-router-dom';
import Header from '../../../Base/Header/Header';
import LeftDrawer from '../../../Base/Drawer/LeftDrawer';
import Footer from '../../../Base/Footer/Footer';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel, FormHelperText} from 'material-ui/Form';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import './apicreateswagger.css';

class ApiCreateSwagger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftDrawer: false,
            open: false,
            activeStep: 0,
            value:'url'
        }
    };

    handleHamberger = (leftValue) => {
        this.setState({leftDrawer: leftValue});
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleChange = (event, value) => {
        this.setState({ value });
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
                                <Stepper activeStep={this.state.activeStep} orientation="vertical">
                                    <Step key='step-one'>
                                        <StepLabel >
                                            <Typography type="headline" gutterBottom className='step-label' component='span'>
                                                Import Swagger
                                            </Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <div className='option-selection' >
                                                <FormControl component="fieldset">
                                                    <RadioGroup aria-label="swagger-upload-method"
                                                                name="swagger-upload-method"
                                                                value={this.state.value}
                                                                onChange={this.handleChange}
                                                    >
                                                        <FormControlLabel value="file" control={<Radio />} label="File" checked className='radio-group'/>
                                                        <FormControlLabel value="url" control={<Radio />} label="URL" className='radio-group'/>
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <div className='option-content' >
                                                <FormControl className='option-content' aria-describedby="name-helper-text">
                                                    <InputLabel htmlFor="name-helper">Swagger URL</InputLabel>
                                                    <Input id="name-helper" />
                                                    <FormHelperText id="name-helper-text">Add the swagger URL</FormHelperText>
                                                </FormControl>
                                            </div>
                                            <div className='option-action'>
                                                <div>
                                                    <Button
                                                        raised
                                                        color="primary"
                                                        onClick={this.handleNext}
                                                    >
                                                        {this.state.activeStep === 2 - 1 ? 'Finish' : 'Next'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </StepContent>
                                    </Step>
                                    <Step key='step-two'>
                                        <StepLabel className='step-label'>
                                            <Typography type="headline" gutterBottom className='step-label' component='span'>
                                                API description
                                            </Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography type="caption" gutterBottom align="left">
                                                You can configure the advance configurations later
                                            </Typography>
                                            <div className='option-content' >
                                                <FormControl className='option-content' aria-describedby="name-helper-text">
                                                    <InputLabel htmlFor="name-helper">Name</InputLabel>
                                                    <Input id="name-helper" className='option-content-50'/>
                                                </FormControl>
                                                <FormControl className='option-content' aria-describedby="name-helper-text">
                                                    <InputLabel htmlFor="name-helper">Version</InputLabel>
                                                    <Input id="name-helper" className='option-content-50'/>
                                                </FormControl>
                                                <FormControl className='option-content' aria-describedby="name-helper-text">
                                                    <InputLabel htmlFor="name-helper">Context</InputLabel>
                                                    <Input id="name-helper"
                                                           startAdornment={<InputAdornment position="start">/</InputAdornment>}
                                                           />
                                                </FormControl>
                                                <FormControl className='option-content' aria-describedby="name-helper-text">
                                                    <InputLabel htmlFor="name-helper">Endpoint</InputLabel>
                                                    <Input id="name-helper" />
                                                </FormControl>
                                            </div>
                                            <div >
                                                <div>
                                                    <Button
                                                        disabled={this.state.activeStep === 0}
                                                        onClick={this.handleBack}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Button
                                                        raised
                                                        color="primary"
                                                        component={Link}
                                                        to='/apis/listing/'
                                                    >
                                                        {this.state.activeStep === 2 - 1 ? 'Create API' : 'Next'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </StepContent>
                                    </Step>
                                </Stepper>
                            </CardContent>
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