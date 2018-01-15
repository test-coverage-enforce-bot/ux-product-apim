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
import { MuiThemeProvider} from 'material-ui/styles';
import Theme from '../themes/light';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = Theme;

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Index extends React.Component {
  state = {
    open: false,
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

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
          <Toolbar>

            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
           </AppBar>
          <div className="root-me">
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
        </MuiThemeProvider>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
