import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SweepExample from './SweepExample';

const SweepGearRatio = () => {
    const [spread, setSpread] = useState(87);
    const [oarLength, setOarLength] = useState(374);
    const [inboard, setInboard] = useState(117);
    const [gearingRatio, setGearingRation] = useState(0);
    const [overLap, setOverLap] = useState(0);
    useEffect(() => {
        if (spread <= 0) {
            setGearingRation('');
        } else {
            const gearingRatio = (oarLength - inboard) / spread;
            setGearingRation(gearingRatio.toFixed(3));
            const overLap = inboard - spread;
            setOverLap(overLap);
        }	
    })

    const handleSpreadChange = (e) => {
        setSpread(e.target.value);
    }
    const handleOarLengthChange = (e) => {
        setOarLength(e.target.value);
    }
    const handleInboardChange = (e) => {
        setInboard(e.target.value);
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    label="Spread"
                    id="spread"
                    sx={{ m: 1, width: '25ch' }}
                    value={spread}
                    onChange={handleSpreadChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                    }}
                    />
                <TextField
                    label="Oar Length"
                    id="oar-length"
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
            <h2>
                Gearing Ration: {gearingRatio}
            </h2>
            <h2>
                Over Lap: {overLap}
            </h2>
            <Divider />
            <h3>
                Sweep Example
            </h3>
            <SweepExample />
        </>
      );
}

export default SweepGearRatio;