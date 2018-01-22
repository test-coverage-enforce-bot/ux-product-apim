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
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Person from 'material-ui-icons/Person';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
import './header.css'


class Header extends Component {

    constructor(props) {
        super(props);
        this.state ={left:false,anchorEl: null};
    }

    handleLangChange = () => {
        let lang = this.state.left?false:true;
        this.state.left = this.state.left?false:true;
        this.props.onSelectHamberger(lang);
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return(
            <AppBar position="fixed" className='app-bar'>
                <Toolbar >
                    <IconButton className='menu-icon' color="contrast" aria-label="Menu" onClick={this.handleLangChange}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="headline" color="inherit" className='product-title'>
                        WSO2 API Publisher
                    </Typography>
                    <div>
                        <Avatar alt="User Name" className='user-image' onClick={this.handleMenu}>
                            <Person/>
                        </Avatar>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    };
};


export default Header;