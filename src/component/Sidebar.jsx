import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = (props) => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	};

    const drawer = (
		<div>
            <Toolbar />
            <Divider />
            <List>
				<ListItem key={'Index'} disablePadding>
					<ListItemButton
						component={Link}
						to="/"
					>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'index'} />
					</ListItemButton>
				</ListItem>
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
            <Divider />
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
		</div>
    );

    return (
        <>
            <AppBar
				position="fixed"
				sx={{
				width: { lg: `calc(100% - ${props.drawerWidth}px)` },
				ml: { lg: `${props.drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { lg: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Rowing Calculator
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { lg: props.drawerWidth }, flexShrink: { lg: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', lg: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', lg: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
        </>
    );

}

export default Sidebar;