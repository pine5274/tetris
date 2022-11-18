import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { getPalette } from './data/palette';

const theme = createTheme(getPalette());

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: {lg: 'flex'} }}>
				<CssBaseline />
			</Box>
		</ThemeProvider>
	);
}

export default App;
