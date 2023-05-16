import {createTheme} from "@mui/material/styles"

export const themeOptions = {
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#f28482',
    },
    secondary: {
      main: '#84A59D',
    },
    background: {
      default: '#f7ede2',
      paper: '#f7ede2',
    },
  },
};
const theme=createTheme(themeOptions);
export default theme