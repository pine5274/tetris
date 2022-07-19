import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const ScullingGearRatio = () => {
    const [span, setSpan] = useState(159);
    const [oarLength, setOarLength] = useState(286);
    const [inboard, setInboard] = useState(88);
    const [gearingRatio, setGearingRation] = useState(0);
    useEffect(() => {
        if (span <= 0) {
            setGearingRation('');
        } else {
            const gearingRatio = (oarLength - inboard) / (span/2);
            setGearingRation(gearingRatio.toFixed(3));
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
        <>
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
        </>
      );
}

export default ScullingGearRatio;