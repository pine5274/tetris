import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getScullingExample } from "../../data/oarRig"
import { getSweepExample } from "../../data/oarRig"

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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

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

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    label="Span"
                    id="span"
                    sx={{ m: 1, width: '25ch' }}
                    value={span}
                    type="tel"
                    onChange={handleSpanChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                    }}
                />
                <TextField
                    label="Oar Length"
                    id="oar-length"
                    sx={{ m: 1, width: '25ch' }}
                    value={oarLength}
                    type="tel"
                    onChange={handleOarLengthChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                    }}
                />
                <TextField
                    label="Inboard"
                    id="inboard"
                    sx={{ m: 1, width: '25ch' }}
                    value={inboard}
                    type="tel"
                    onChange={handleInboardChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
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
                    type="tel"
                    onChange={handleSpreadChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                    }}
                />
                <TextField
                    label="Oar Length"
                    id="oar-length"
                    sx={{ m: 1, width: '25ch' }}
                    value={oarLength}
                    type="tel"
                    onChange={handleOarLengthChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                    }}
                />
                <TextField
                    label="Inboard"
                    id="inboard"
                    sx={{ m: 1, width: '25ch' }}
                    value={inboard}
                    type="tel"
                    onChange={handleInboardChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
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

const ScullingExample = () => {
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

    const rows = getScullingExample().map((x) => {
        return createData(x.Scull, x.Span, x.OarLength, x.Inboard, x.Outboard, x.Overlap, x.GearingRatio)
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="sculling table">
                <caption>
                    cf. High Performance Rowing (John McArthur)
                    <br></br>
                    Gearing ratio = Outboard / (Span/2)
                    <br></br>
                    Overlap for scull = Inboard*2 - Span
                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Scull</TableCell>
                        <TableCell align="right">Span&nbsp;(cm)</TableCell>
                        <TableCell align="right">Oar&nbsp;Length&nbsp;(cm)</TableCell>
                        <TableCell align="right">Inboard&nbsp;(cm)</TableCell>
                        <TableCell align="right">Outboard&nbsp;(cm)</TableCell>
                        <TableCell align="right">Ove&nbsp;Lap&nbsp;(cm)</TableCell>
                        <TableCell align="right">Gearing&nbsp;Ration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.scull}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.scull}
                        </TableCell>
                        <TableCell align="right">{row.span}</TableCell>
                        <TableCell align="right">{row.length}</TableCell>
                        <TableCell align="right">{row.inboard}</TableCell>
                        <TableCell align="right">{row.outboard}</TableCell>
                        <TableCell align="right">{row.overlap}</TableCell>
                        <TableCell align="right">{row.gearingRatio}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const SweepExample = () => {
    function createData(
        sweep,
        spread,
        length,
        inboard,
        outboard,
        overlap,
        gearingRatio
    ) {
        return { sweep, spread, length, inboard, outboard, overlap, gearingRatio };
    }

    const rows = getSweepExample().map((x) => {
        return createData(x.Sweep, x.RiggerSpread, x.OarLength, x.Inboard, x.Outboard, x.Overlap, x.GearingRatio)
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="sweep table">
                <caption>
                    cf.&nbsp;
                    <Link href="https://d2wmdlq830ho5j.cloudfront.net/worldrowing/wp-content/uploads/2020/12/04183534/CoachingManualLevelII_English.pdf">
                        The FISA Coaching Development Program;&nbsp;
                    </Link>
                    Club level for Big Blade
                    <br></br>
                    Oar length of Fat Smoothy is 5cm shorter than Bigblade or Smoothy.
                    <br></br>
                    Overlap for sweep = Inboard - Spread
                    <br></br>
                    Gearing ratio = outboard / Rigger Spread
                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Sweep</TableCell>
                        <TableCell align="right">Rigger&nbsp;Spread&nbsp;(cm)</TableCell>
                        <TableCell align="right">Oar&nbsp;Length&nbsp;(cm)</TableCell>
                        <TableCell align="right">Inboard&nbsp;(cm)</TableCell>
                        <TableCell align="right">Outboard&nbsp;(cm)</TableCell>
                        <TableCell align="right">Ove&nbsp;Lap&nbsp;(cm)</TableCell>
                        <TableCell align="right">Gearing&nbsp;Ration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.sweep}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.sweep}
                        </TableCell>
                        <TableCell align="right">{row.spread}</TableCell>
                        <TableCell align="right">{row.length}</TableCell>
                        <TableCell align="right">{row.inboard}</TableCell>
                        <TableCell align="right">{row.outboard}</TableCell>
                        <TableCell align="right">{row.overlap}</TableCell>
                        <TableCell align="right">{row.gearingRatio}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const GearRatio = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    return (
        <>
			<h1>Gearing Ratio Calculator</h1>
            <Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs 
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Sculling" {...a11yProps(0)} />
						<Tab label="Sweep" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<ScullingGearRatio />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SweepGearRatio />
				</TabPanel>
			</Box>
        </>
	);
}

export default GearRatio;
