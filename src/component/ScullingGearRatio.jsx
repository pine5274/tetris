import React, { useState, useEffect } from 'react';
import { getScullingExample } from "../data/oarRig"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ScullingExample from './ScullingExample';

const ScullingGearRatio = () => {
    const [span, setSpan] = useState(159);
    const [oarLength, setOarLength] = useState(286);
    const [inboard, setInboard] = useState(88);
    const [gearingRatio, setGearingRation] = useState(0);
    const [overLap, setOverLap] = useState(0);
    useEffect(() => {
        if (span <= 0) {
            setGearingRation('');
        } else {
            const gearingRatio = (oarLength - inboard) / (span/2);
            setGearingRation(gearingRatio.toFixed(3));
            const overLap = inboard * 2 - span;
            setOverLap(overLap);
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

    function createData(
        scull,
        span,
        length,
        inboard,
        outboard,
        overlap,
        gearingRatio
    ) {
        return { scull, span, length, inboard, outboard, overlap, gearingRatio };
    }

    const r = getScullingExample().map((x) => {
        return createData(x.Scull, x.Span, x.OarLength, x.Inboard, x.Outboard, x.Overlap, x.GearingRatio)
    })

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
                Sculling Example
            </h3>
            <ScullingExample />
        </>
      );
}

export default ScullingGearRatio;