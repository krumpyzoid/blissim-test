import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#283149',
        },
        secondary: {
            main: '#404b69',
        },
        accent: '#00818a',
        light: '#dbedf3',
    },
    spacing: 8,
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
    },
})

// Colors
// #283149
// #404b69
// #00818a
// #dbedf3

export default theme;