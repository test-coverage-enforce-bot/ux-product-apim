import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';


const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: green,
        secondary: {
            ...purple,
        },
        error: red,
    },
});


export default theme;
