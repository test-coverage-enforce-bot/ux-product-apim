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
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Home from 'material-ui-icons/Home';
import Timeline from 'material-ui-icons/Timeline';
import Settings from 'material-ui-icons/Settings';
import Language from 'material-ui-icons/Language';
import Link from 'material-ui-icons/Link';
import './leftDrawer.css';

class LeftDrawer extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Drawer open={this.props.left}
                     className="left-drawer" type="persistent">
                <div>
                    <List className='list-menu'>
                        <ListItem button className='list-menu-home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemIcon>
                                <Language />
                            </ListItemIcon>
                            <ListItemText primary="APIs" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="Endpoints" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Timeline />
                            </ListItemIcon>
                            <ListItemText primary="Analytics" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Subscriptions" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    };
};

LeftDrawer.propTypes = {
    left: PropTypes.bool,
};

export default LeftDrawer;