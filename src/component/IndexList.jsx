import React from 'react';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';

const IndexList = () => {
  return (
    <>
        <List>
            <ListItem key={'Gearing Ratio'} disablePadding>
                <ListItemButton
                    component={Link}
                    to="/gearing-ratio"
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Gearing Ratio'} />
                </ListItemButton>
            </ListItem>
        </List>
    </>
  )
}
export default IndexList