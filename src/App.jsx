import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScullingGearRatio from './component/ScullingGearRatio';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<ScullingGearRatio />
			</Container>
		</ThemeProvider>
	);
}

export default App;
