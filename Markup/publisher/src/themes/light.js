import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: { light: green[300], main: purple[500], dark: green[700] },
        error: red,
    },
});

export default theme;