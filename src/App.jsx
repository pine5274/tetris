import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './component/Sidebar';
import Index from './component/pages/Index';
import GearRatio from './component/pages/GearRatio/GearRatio';
import PaceToWatts from './component/pages/PaceToWatts';
import NoMatch from './component/pages/NoMatch';

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
		default: '#313545',
		paper: '#3b4252'
	},
  },
});

function App() {
	const drawerWidth = 240;
	return (
		<ThemeProvider theme={darkTheme}>
			<Box sx={{ display: {lg: 'flex'} }}>
				<CssBaseline />
				<BrowserRouter>
					<Sidebar drawerWidth={drawerWidth} />
					<Box
						component="main"
						sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
						>
							<Toolbar />
							<Routes>
								<Route path="/" element={<Index />} />
								<Route path="/gearing-ratio" element={<GearRatio />} />
								<Route path="/pace-to-watt" element={<PaceToWatts />} />
								<Route path="*" element={<NoMatch />} />
							</Routes>
					</Box>	
				</BrowserRouter>
			</Box>
		</ThemeProvider>
	);
}

export default App;