import React from 'react';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import BuildIcon from '@mui/icons-material/Build';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import FlagIcon from '@mui/icons-material/Flag';

const IndexList = () => {
    const ROUTE = '/rowing-calculator';
    return (
        <>
            <List>
                <ListItem key={'Gearing Ratio'} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={`${ROUTE}/gearing-ratio`}
                    >
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Gearing Ratio'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Pace to Watt'} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={`${ROUTE}/pace-to-watts`}
                    >
                        <ListItemIcon>
                            <SyncAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Pace to Watts'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Ergo Prediction'} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={`${ROUTE}/ergo-prediction`}
                    >
                        <ListItemIcon>
                            <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Ergo Prediction'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}
export default IndexList
