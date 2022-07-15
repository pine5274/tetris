import React, { useState, useEffect } from 'react';
import RiggingValue from './component/riggingValue';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
	const [span, setSpan] = useState(159);
	const [oarLength, setOarLength] = useState(286);
	const [inboard, setInboard] = useState(88);
	const [gearingRatio, setGearingRation] = useState(0);
	useEffect(() => {
		if (span <= 0) {
			setGearingRation('');
		} else {
			setGearingRation((oarLength - inboard) / (span/2));
		}	
	})
	const handleSpanChange = (e) => {
		setSpan(e.target.value);
	}
	const handleOarLengthChange = (e) => {
		setOarLength(e.target.value);
	}
	const handleInboardChange = (e) => {
		setInboard(e.target.value);
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<h1 className="text-white text-3xl text-center mb-3 font-sans font-semibold">Gearing Ratio Calculator</h1>
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
					<TextField
						label="Span"
						id="span"
						sx={{ m: 1, width: '25ch' }}
						value={span}
						onChange={handleSpanChange}
						InputProps={{
							startAdornment: <InputAdornment position="start">cm</InputAdornment>,
						}}
						/>
					<TextField
						label="Oal Length"
						id="oal-length"
						sx={{ m: 1, width: '25ch' }}
						value={oarLength}
						onChange={handleOarLengthChange}
						InputProps={{
							startAdornment: <InputAdornment position="start">cm</InputAdornment>,
						}}
						/>
					<TextField
						label="Inboard"
						id="inboard"
						sx={{ m: 1, width: '25ch' }}
						value={inboard}
						onChange={handleInboardChange}
						InputProps={{
							startAdornment: <InputAdornment position="start">cm</InputAdornment>,
						}}
						/>
				</Box>
				<h3>
					Gearing Ration: {gearingRatio}
				</h3>
			</Container>
		</ThemeProvider>
	);
}

export default App;
