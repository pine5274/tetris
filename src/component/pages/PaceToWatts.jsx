import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const PaceToWatts = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(45);
    const [tenths, setTenths] = useState(0);
  
    const handleMinutesChange = (e) => {
        setMinutes(e.target.value);
    }
    const handleSecondsChange = (e) => {
        setSeconds(e.target.value);
    }
    const handleTenthsChange = (e) => {
        setTenths(e.target.value);
    }
    return (
        <>
            <h1>Pace to Watt Calculator</h1>
            <Box sx={{ width: '100%' }}>
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
                <h2>200watts</h2>
            </Box>
        </>
    )
}
export default PaceToWatts