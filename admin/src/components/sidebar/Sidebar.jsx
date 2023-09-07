import * as React from 'react';
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
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import './sidebar.css'
const drawerWidth = 240;



const useStyles = makeStyles({
  root: {
    marginTop: '45px', backgroundColor: 'gray'
  }
})

const Sidebar = (props: Props) => {

  const classes = useStyles()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <h6>Dashboard</h6>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LineStyleIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary={'Analytics'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary={'Sales'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <h6>Quick Menu</h6>
        <Link to='/users' style={{textDecoration:'none',color:'inherit'}}>
        <ListItem key={"Users"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItemButton>
        </ListItem>
        </Link>
        <ListItem key={"Products"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <StorefrontOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Transactions"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <AttachMoneyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Transactions"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Reports"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Reports"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <h6>Notifications</h6>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
        <ListItem key={'Mail'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Mail'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Feedback'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Feedback'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Messages'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Messages'} />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
      <List>
        <h6>Staff</h6>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
        <ListItem key={"Manage"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Manage"} />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
        <ListItem key={"Analytics"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Analytics"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Reports"} disablePadding>
          <ListItemButton sx={{ fontSize: '2px' }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Reports"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }} variant="contained"
      className={classes.root}
    >
      <CssBaseline />

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
            mt: '45px'
          }}

          style={{ zIndex: 1250 }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Sidebar
