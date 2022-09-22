import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

const WeightAdjustment = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(45);
    const [tenths, setTenths] = useState(0);
    const [weight, setWeight] = useState(75);
    const [adjust, setAdjust] = useState('1:45.0');

    const handleMinutesChange = (e) => {
        setMinutes(e.target.value);
    }
    const handleSecondsChange = (e) => {
        setSeconds(e.target.value);
    }
    const handleTenthsChange = (e) => {
        setTenths(e.target.value);
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }

    const STANDARD_WEIGHT = 75;

    useEffect(() => {
        setAdjust(convertTimeToMMSS(adjustPace(getPace())));
    }, [minutes, seconds, tenths, weight]);

    const adjustPace = (pace) => {
        return pace * (((STANDARD_WEIGHT + 22) / (Number(weight) + 22)) ** (-2/9));
    }

    const getPace = () => {
        return Number(minutes) * 60 + Number(seconds) + Number(tenths) * 0.1;
    }

    const convertTimeToMMSS = (time) => {
        const mm = `${Math.floor(time / 60)}`;
        let ss = (time % 60).toFixed(1);
        if (ss < 10) {
            ss = "0" + String(ss);
        } else {
            ss = String(ss);
        }

        return `${mm}:${ss}`;
    }

    return (
        <>
            <h1>Weight Adjustment</h1>
            <Typography variant="body2">
                Enter your body weight and either the time (for a distance piece) or distance (for a timed piece) and then click Calculate.
            </Typography>
            <Box sx={{ p: 3 }}>
                {/* <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& > *': {
                        m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button startIcon={<ManIcon />}>Man</Button>
                        <Button startIcon={<WomanIcon/>} >Woman</Button>
                    </ButtonGroup>
                </Box> */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField
                        label="pace"
                        id="minutes"
                        sx={{ m: 1, width: '6ch' }}
                        value={minutes}
                        inputProps={{ inputMode: 'numeric', type: 'tel', }}
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
                        id="seconds"
                        sx={{ m: 1, width: '6ch' }}
                        value={seconds}
                        inputProps={{ inputMode: 'numeric', type: 'tel', }}
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
                        id="tenths"
                        sx={{ m: 1, width: '6ch' }}
                        value={tenths}
                        inputProps={{ inputMode: 'numeric', type: 'tel', }}
                        size="small"
                        onChange={handleTenthsChange}
                    />
                    <Box
                        sx={{ mb: 1, display: 'flex', alignItems: 'flex-end', }}
                    >
                        <Typography sx={{ color: 'caption.main', }} variant="body1" component="div">
                            /500m
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField
                        label="weight"
                        id="weight"
                        sx={{ m: 1, width: '12ch' }}
                        value={weight}
                        inputProps={{ inputMode: 'numeric', type: 'tel', }}
                        size="small"
                        onChange={handleWeightChange}
                    />
                    <Box
                        sx={{ mb: 1, display: 'flex', alignItems: 'flex-end', }}
                    >
                        <Typography sx={{ color: 'caption.main', }} variant="body1" component="div">
                            kg
                        </Typography>
                    </Box>
                </Box>
                <h2>
                    Adjustment Score: {adjust}
                </h2>
            </Box>
        </>
    )
}

export default WeightAdjustment
