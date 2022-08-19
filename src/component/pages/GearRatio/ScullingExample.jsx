import React from 'react';
import { getScullingExample } from "../../../data/oarRig"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
                <caption>cf. High Performance Rowing (John McArthur)</caption>
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

export default ScullingExample;