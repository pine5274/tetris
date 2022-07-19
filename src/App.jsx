import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
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
