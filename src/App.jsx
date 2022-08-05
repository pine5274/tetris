import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GearRatio from './component/GearRatio';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      	main: '#96c2ff',
    },
    secondary: {
     	 main: '#e19fa1',
    },
    info: {
     	 main: '#8ec9ef',
    },
    text: {
     	 primary: '#f8faff',
    },
    success: {
      	main: '#95dfaf',
    },
    warning: {
     	 main: '#eec988',
    },
    error: {
     	 main: '#d6bcfa',
    },
	background: {
		default: '#303030',
		paper: '#424242'
	},
  },
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<GearRatio />
			</Container>
		</ThemeProvider>
	);
}

export default App;
