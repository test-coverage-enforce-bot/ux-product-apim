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
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import SearchBox from '../../Base/SearchBox/SearchBox'
import GridOnIcon from 'material-ui-icons/GridOn';
import ListIcon from 'material-ui-icons/List';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import UserIcon from 'material-ui-icons/Group';
import './listing.css';
import PageLoadingAnimation from '../../Base/Loading/loading';


class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftDrawer: false,
            open: false,
            loading: true
        }
    }

    handleHamberger = (leftValue) => {
        this.setState({leftDrawer: leftValue});
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }

    render(){
        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <PageLoadingAnimation/>
            )
        }

        return(
            <div className='main-wrapper'>
                <Header onSelectHamberger={this.handleHamberger}/>
                <LeftDrawer left={this.state.leftDrawer}/>

                <Toolbar className='app-toolbar' >
                    <Grid container spacing={0}  alignItems="flex-start"  direction="row"  justify="center" >
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8} className='app-toolbar-center-grid' >
                            <Typography type="title" color="inherit" className='app-toolbar-title' align='left'>
                                All APIs
                            </Typography>
                            <SearchBox/>
                            <div className='listing-actions'>
                                <IconButton className='list' aria-label="List">
                                    <ListIcon />
                                </IconButton>
                                <IconButton className='grid' aria-label="Grid">
                                    <GridOnIcon />
                                </IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Toolbar>

                <div className='body-container'>
                    <Grid container className='api-listing' spacing={0} alignItems="flex-start"  direction="row"  justify="center">
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={24}>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent className='card-content-min'>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    This is a simple API for Domino's online pizza delivery store.
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent className='card-content-min'>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">

                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className=''>
                                        <Link to="/about" className='unlink'>
                                            <CardMedia
                                                className='api-image'
                                                image="../../../images/pizza.jpeg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography type="headline" component="h2">
                                                    Domino's
                                                </Typography>
                                                <Typography type="caption" gutterBottom align="left">
                                                    1.0.0 - administrator
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions>
                                            <IconButton aria-label="Users">
                                                <UserIcon />
                                            </IconButton>
                                            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <EditIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={2}  >
                        </Grid>
                    </Grid>
                    <div className='fab-bottom'>
                        <Button fab color="primary" aria-label="add" className='app-toolbar-fab-icon'>
                            <AddIcon />
                        </Button>
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Delete from API Manager?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This API will disappear from your API listing and you won't be able to recover.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
                <Footer/>
            </div>
        )
    }
};

export default Listing;