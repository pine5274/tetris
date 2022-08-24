import React from 'react';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

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
                            <SettingsIcon />
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
                            <TransferWithinAStationIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Pace to Watts'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}
export default IndexList
