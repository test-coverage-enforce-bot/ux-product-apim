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

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PageLoadingAnimation from '../app/components/Base/Loading/loading';


class Index extends React.Component {
  state = {
    open: false,
      loading: true
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }

  render() {
        const { open } = this.state;
        const { loading } = this.state;

      if(loading) { // if your component doesn't have to wait for an async action, remove this block
          return (
                  <PageLoadingAnimation/>
          )
      }

    return (
        <div className="root-me">
          <AppBar position="static">
          <Toolbar>

            <Typography type="title" color="inherit" >
              Title
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
           </AppBar>

            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Dialog open={open} onClose={this.handleClose}>
                  <DialogTitle>Super Secret Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>1-2-3-4-5</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
                <Paper>
                  <Typography type="display1" gutterBottom>
                    Material-UI
                  </Typography>
                  <Typography type="subheading" gutterBottom>
                    example project
                  </Typography>
                  <Button raised color="accent" onClick={this.handleClick}>
                    Super Secret Password
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
