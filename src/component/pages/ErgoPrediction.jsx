import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(race, pace, time) {
    return { race, pace, time };
}

const ErgoPrediction = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(45);
    const [tenths, setTenths] = useState(0);
    const [distance, setDistance] = useState(2000);
    const [rows, setRows] = useState([]);

    const handleMinutesChange = (e) => {
        setMinutes(e.target.value);
    }
    const handleSecondsChange = (e) => {
        setSeconds(e.target.value);
    }
    const handleTenthsChange = (e) => {
        setTenths(e.target.value);
    }
    const handleDistanceChange = (e) => {
        setDistance(e.target.value);
    }

    const races = [1000, 2000, 6000];

    const predictRacePace = (race) => {
        const time = (minutes * 60 + seconds + tenths * 0.1) * (race / distance) ** (1/18);
        const mm = String(Math.floor(time / 60));
        let ss = Math.round(Math.floor((time % 60) * 10))/10;
        if (ss < 1) {
            ss = "0" + String(ss);
        } else {
            ss = String(ss);
        }

        return `${mm}:${ss}`;
    }

    const predictRaceTime = (race) => {
        const time = (race/500)*(minutes * 60 + seconds + tenths * 0.1) * (race / distance) ** (1/18);
        console.log(race, minutes, seconds, tenths, time);
        const mm = String(Math.floor(time / 60));
        let ss = Math.round(Math.floor((time % 60) * 10))/10;
        if (ss < 1) {
            ss = "0" + String(ss);
        } else {
            ss = String(ss);
        }

        return `${mm}:${ss}`;
    }


    
    useEffect(() => {
        const array = races.map((race) => {
            return createData(String(race) + 'm', predictRacePace(race), predictRaceTime(race));
        });
        setRows(array);
    }, [minutes, seconds, tenths, distance]);

    return (
        <>
            <h1>Ergo Prediction</h1>
            <Typography variant="body2">
                Based on your performance , we have predicted your maximum performance over some common race distances.
            </Typography>
            <Box sx={{ p: 3, }} >
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
                        // label="sec"
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
                        // label="dec"
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
                        label="distance"
                        id="minutes"
                        sx={{ m: 1, width: '18ch' }}
                        value={distance}
                        inputProps={{ inputMode: 'numeric', type: 'tel', }}
                        size="small"
                        onChange={handleDistanceChange}
                    />
                    <Box
                        sx={{ mb: 1, display: 'flex', alignItems: 'flex-end', }}
                    >
                        <Typography sx={{ color: 'caption.main', }} variant="body1" component="div">
                            m
                        </Typography>
                    </Box>
                </Box>
                <TableContainer sx={{ mt: 3, maxWidth: 500 }} component={Paper}>
                    <Table aria-label="ergo predict table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Race</TableCell>
                            <TableCell align="right">Predict Pace&nbsp;(/500m)</TableCell>
                            <TableCell align="right">Predict Time&nbsp;</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.race}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.race}
                            </TableCell>
                            <TableCell align="right">{row.pace}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
export default ErgoPrediction
