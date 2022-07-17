import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {HiInformationCircle} from "react-icons/hi"
import {IoMdTrendingUp} from "react-icons/io"
import {FaUserFriends} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {IoMdClipboard} from "react-icons/io"
import {ThemeProvider, createTheme } from "@material-ui/core/styles";
import { ClassNames } from '@emotion/react';
const menus = [
  { name: "Mate", path: "/", icons: <FaUserFriends></FaUserFriends>},
  { name: "인게임 정보", path: "/InGameInfo", icons: <HiInformationCircle></HiInformationCircle> },
  { name: "전적 검색", path: "/Summoner", icons: <HiInformationCircle></HiInformationCircle> },
  { name: "Trend", path: "/Trend", icons: <IoMdTrendingUp></IoMdTrendingUp> },
  { name: "Youtube", path: "/Youtube", icons: <BsYoutube></BsYoutube>},
  { name: "Board", path: "/Board", icons: <IoMdClipboard></IoMdClipboard>}
];

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = ({
    ListItemText:{
      fontSize:'0.7em',//Insert your required size
      fontFamily: ['"Public Sans"', 'sans-serif'].join(','),    }
  });

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
        <List>
            {menus.map((text) => (
              <ListItem button key={text.name}>
                <ListItemIcon>
                  {text.icons}
                </ListItemIcon>
                <Link to={text.path}>
                <ListItemText primary={<Typography variant="h8" style={{fontFamily: ['"Public Sans"', 'sans-serif'].join(',')}}>{text.name}</Typography>}/>
                </Link>
              </ListItem>
            ))}
        </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FOR_BOTTOM
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
