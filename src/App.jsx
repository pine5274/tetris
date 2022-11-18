import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { getPalette } from './assets/palette';
import GameBoard from './component/GameBoard';

const theme = createTheme(getPalette());

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: {lg: 'flex'} }}>
				<CssBaseline />
				<GameBoard />
			</Box>
		</ThemeProvider>
	);
}

export default App;
