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

import Header from '../../Base/Header/Header';
import LeftDrawer from '../../Base/Drawer/LeftDrawer';
import Footer from '../../Base/Footer/Footer';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './details.css';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import BackIcon from 'material-ui-icons/ArrowBack';
import DescriptionIcon from 'material-ui-icons/Description';
import LifecycleIcon from 'material-ui-icons/DonutLarge';
import EndpointsIcon from 'material-ui-icons/Games';
import ResourcesIcon from 'material-ui-icons/ContentCopy';
import DocumentsIcon from 'material-ui-icons/InsertDriveFile';
import PermissionsIcon from 'material-ui-icons/LockOutline';
import MediationIcon from 'material-ui-icons/Tune';
import ScriptingIcon from 'material-ui-icons/Code';
import SubscriptionsIcon from 'material-ui-icons/Subscriptions';
import SecurityIcon from 'material-ui-icons/VerifiedUser';
import CreateIcon from 'material-ui-icons/Create';
import DeleteIcon from 'material-ui-icons/Delete';
import NewVersionIcon from 'material-ui-icons/CreateNewFolder';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftDrawer: false,
            open: false
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
                <Toolbar className='app-toolbar' >
                    <Grid container spacing={0}  alignItems="flex-start"  direction="row"  justify="center" >
                        <Grid item xs={2} className='left-fixed-bar-top'>
                        </Grid>
                        <Grid item xs={8} className='app-toolbar-center-grid' >
                            <Typography type="display1" color="inherit" className='app-toolbar-title' component='span'>
                                Domino's
                            </Typography>
                            <div className='listing-actions'>
                                <Button dense>
                                    <CreateIcon />
                                    Edit
                                </Button>
                                <Button dense>
                                    <DeleteIcon />
                                    Delete
                                </Button>
                                <Button dense>
                                    <NewVersionIcon />
                                    Create version
                                </Button>
                                <Button dense>
                                    <DescriptionIcon />
                                    View Swagger
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Drawer type="permanent" className='left-fixed-bar'>
                    <List className='list-menu'>
                        <ListItem button className='list-menu-home' component={Link} to='/apis/listing/'>
                            <Avatar>
                                <BackIcon />
                            </Avatar>
                            <ListItemText primary="Back" />
                        </ListItem>
                        <Divider/>
                        <ListItem button  >
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Overview" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <LifecycleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lifecycle" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <EndpointsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Endpoints" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <ResourcesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resources" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <ResourcesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Scopes" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <DocumentsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Documents" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <PermissionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Permissions" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <MediationIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mediation" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <ScriptingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Scripting" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <SubscriptionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Subscriptions" />
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon>
                                <SecurityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Security" />
                        </ListItem>
                    </List>
                </Drawer>
                <div className='body-container'>
                    <Grid container spacing={0} alignItems="flex-start"  direction="row"
                          justify="center">
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8} className='main-col'>
                            <Card className=''>
                                <CardMedia
                                    className='api-image'
                                    image="../../../images/pizza.jpeg"
                                    title="Dominos"
                                />
                            </Card>

                            <Table className='api-details-table'>
                                <TableBody>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Visibility</Typography></TableCell>
                                        <TableCell >public</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Version</Typography></TableCell>
                                        <TableCell>1.0.0</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Context</Typography></TableCell>
                                        <TableCell >/getPizza</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Date Created</Typography></TableCell>
                                        <TableCell>2018-01-04 3.45 PST</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Last Updated</Typography></TableCell>
                                        <TableCell >2018-01-08 5.35 PST</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell><Typography type="body2">Published environments</Typography></TableCell>
                                        <TableCell >not-supported</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;