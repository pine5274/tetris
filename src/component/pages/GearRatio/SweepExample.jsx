import React from 'react';
import { getSweepExample } from "../../../data/oarRig"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="sweep table">
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

export default SweepExample;