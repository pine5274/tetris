import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

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
    })

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    label="Minutes"
                    id="minutes"
                    sx={{ m: 1, width: '25ch' }}
                    value={minutes}
                    type="tel"
                    onChange={handleMinutesChange}
                />
                <TextField
                    label="Seconds"
                    id="seconds"
                    sx={{ m: 1, width: '25ch' }}
                    value={seconds}
                    type="tel"
                    onChange={handleSecondsChange}
                />
                <TextField
                    label="Tenths"
                    id="tenths"
                    sx={{ m: 1, width: '25ch' }}
                    value={tenths}
                    type="tel"
                    onChange={handleTenthsChange}
                />
            </Box>
            <Divider />
            <h2>{watts} watts</h2>
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
        if ( s < 1 ) {
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
                    sx={{ m: 1, width: '25ch' }}
                    value={watts}
                    type="tel"
                    onChange={handleWattsChange}
                />
            </Box>
            <Divider />
            <h2>{minutes}:{seconds} /500m</h2>
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
