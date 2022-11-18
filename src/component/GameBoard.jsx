import React from 'react';
import Paper from '@mui/material/Paper';
import { viewMatrix } from '../models/Game';

const GameBoard = () => {
    const matrix = viewMatrix();
    return (
        <>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <table className='game-board'>
                    <tbody>
                        {matrix.map((row, i) => {
                            const blocks = row.map((block, j) => {
                                const className = 'game-block';
                                return <td key={j} className={className}></td>;
                            });
                            return <tr key={i}>{blocks}</tr>;
                        })}
                    </tbody>
                </table>
            </Paper>
        </>
    );
};

export default GameBoard;