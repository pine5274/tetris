import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
			)}
		</div>
	);
}
  
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const PaceTo = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(45);
    const [tenths, setTenths] = useState(0);
    const [watts, setWatts] = useState(0);
  
    const handleMinutesChange = (e) => {
        setMinutes(Number(e.target.value));
    }
    const handleSecondsChange = (e) => {
        setSeconds(Number(e.target.value));
    }
    const handleTenthsChange = (e) => {
        setTenths(Number(e.target.value));
    }

    useEffect(() => {
        setWatts((2.80 / ((minutes * 60 + seconds + tenths * 0.1) / 500) ** 3).toFixed(1));
    });

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    label="Minutes"
                    id="minutes"
                    sx={{ m: 1, width: '8ch' }}
                    value={minutes}
                    type="tel"
                    size="small"
                    onChange={handleMinutesChange}
                />
                <Box
                    sx={{ display: 'flex', alignItems: 'center', }}
                >
                    <Typography variant="h5" component="div">
                        :
                    </Typography>
                </Box>
                <TextField
                    label="Seconds"
                    id="seconds"
                    sx={{ m: 1, width: '8ch' }}
                    value={seconds}
                    type="tel"
                    size="small"
                    onChange={handleSecondsChange}
                />
                <Box
                    sx={{ display: 'flex', alignItems: 'center', }}
                >
                    <Typography variant="h5" component="div">
                        .
                    </Typography>
                </Box>
                <TextField
                    label="Tenths"
                    id="tenths"
                    sx={{ m: 1, width: '8ch' }}
                    value={tenths}
                    type="tel"
                    size="small"
                    onChange={handleTenthsChange}
                />
            </Box>
            <h2>{watts} watts</h2>
            <Divider />
            <Paper sx={{ p: 2, mt: 4, }}>
                <Typography 
                    sx={{ color: 'caption.main', }}
                    variant="body2"
                    component="div"
                >
                    watts = 2.80/pace³
                </Typography>
                <Typography 
                    sx={{ color: 'caption.main', }}
                    variant="body2"
                    component="div"
                >
                <Link href="https://www.concept2.com/indoor-rowers/training/calculators/watts-calculator">
                    concept2 watts-calculator
                </Link>
                </Typography>
            </Paper>
        </>
    )
}

const WattsTo = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(45);
    const [watts, setWatts] = useState(200);
  
    const handleWattsChange = (e) => {
        setWatts(Number(e.target.value));
    }

    useEffect(() => {
        let s = 500 * (2.8 / watts) ** (1/3);
        setMinutes(Math.floor(s / 60));
        s = Math.round(Math.floor((s % 60) * 10))/10;
        if (s < 1) {
            s = "0" + String(s);
        }
        setSeconds(s);
    })

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    label="Watts"
                    id="watts"
                    sx={{ m: 1, width: '12ch' }}
                    value={watts}
                    type="tel"
                    size="small"
                    onChange={handleWattsChange}
                />
            </Box>
            <h2>{minutes}:{seconds} /500m</h2>
            <Divider />
            <Paper sx={{ p: 2, mt: 4, }}>
                <Typography 
                    sx={{ color: 'caption.main', }}
                    variant="body2"
                    component="div"
                >
                    pace = ³√(2.80/watts)
                </Typography>
                <Typography 
                    sx={{ color: 'caption.main', }}
                    variant="body2"
                    component="div"
                >
                <Link href="https://www.concept2.com/indoor-rowers/training/calculators/watts-calculator">
                    concept2 watts-calculator
                </Link>
                </Typography>
            </Paper>
        </>
    )
}

const PaceToWatts = () => {
    const [tabNum, setTabNum] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabNum(newValue);
    };

    return (
        <>
            <h1>Pace to Watts Calculator</h1>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabNum}
                    onChange={handleTabChange}
                    aria-label="secondary tabs example"
                >
                    <Tab value={0} label="Pace to Watts" />
                    <Tab value={1} label="Watts to Pace" />
                </Tabs>
                </Box>
                <TabPanel value={tabNum} index={0}>
                    <PaceTo />
                </TabPanel>
                <TabPanel value={tabNum} index={1}>
                    <WattsTo />
                </TabPanel>
            </Box>
        </>
    )
}
export default PaceToWatts
