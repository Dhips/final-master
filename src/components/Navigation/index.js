//The Navigation bar for Authenticated and Non-Authenticated Users
import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import MyDSM from '../../images/MyDSM.jpg';
import './index.css';

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateIcon from '@material-ui/icons/Create';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SearchIcon from '@material-ui/icons/Search';
import FeedbackIcon from '@material-ui/icons/Feedback';

//import HistoryIcon from '@material-ui/icons/History';
//import BookIcon from '@material-ui/icons/Book';
//import Typography from "@material-ui/core/Typography";

//Declares the type of navigation bar from material ui
//Allows the Home icon to appear at all times
//Allows Sign In icon to apprear for unauthenticated users
//Allows Account, Archive, SWOT, DSM and Sign Out icon
//to appear fo authenticated users

function Navigation({ firebase }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
        <div className="size">
            <div className={classes.root}>
                <AppBar position="sticky">
                    <Toolbar 
                      style={{
                        display:"flex", 
                        justifyContent:"space-between", 
                        maxHeight: 30
                      }}>
                      <div>
                        <MenuItem edge="start">
                          <a href="../">                   
                            <img 
                              src={MyDSM}
                              alt="MyDSM_Logo"
                              edge="start"
                              style={{
                              height:"auto", 
                              width:60,
                              paddingTop: 3,
                              }}
                              />
                          </a>
                        </MenuItem>
                        </div>
                        <div>
                          <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              edge="end"
                              onClick={handleDrawerOpen}
                              className={classes.menuButton}
                          >
                              <MenuIcon />
                          </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
        <Drawer 
          variant="persistent" 
          anchor="right" 
          open={open}
        >
            <div>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
              <div>
                <ListItem 
                button key={"k1"} 
                component={Link} 
                to={ROUTES.HOME}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary={"Home"} 
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose} 
                    />
                </ListItem>
                <ListItem 
                    button key={"k2"} 
                    component={Link} 
                    to={ROUTES.HELP}>
                      <ListItemIcon>
                          <SearchIcon />
                      </ListItemIcon>
                      <ListItemText 
                        primary={"Help & Support"} 
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose} 
                        />
                    </ListItem>
              </div>
            <AuthUserContext.Consumer>
              { authUser =>
                authUser ? (
                  <div>
                    <ListItem 
                    button key={"k3"} 
                    component={Link}
                    to = {ROUTES.ACCOUNT}>
                      <ListItemIcon>
                        <AccountBoxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Account"}
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose}
                      />
                    </ListItem>
                    <ListItem 
                    button key={"k4"} 
                    component={Link}
                    to = {ROUTES.DSM}>
                      <ListItemIcon>
                        <FiberNewIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={"DSM"}
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose}
                      />
                    </ListItem>  
                    <ListItem 
                    button key={"k5"} 
                    component={Link}
                    to = {ROUTES.FEEDBACK}>
                      <ListItemIcon>
                        <FeedbackIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Feedback"}
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose}
                      />
                    </ListItem> 
                    <ListItem 
                    button key={"k6"} 
                    onClick={firebase.doSignOut}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Sign Out"}
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose}
                      />
                    </ListItem>                    
                    </div>
                ) : 
                <ListItem
                button key={"k7"}
                component={Link}
                to = {ROUTES.SIGN_IN}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Sign In"}
                        onClick={handleDrawerClose}
                        onClose={handleDrawerClose}
                    />
                </ListItem>
              }
            </AuthUserContext.Consumer>
          </List>
        </Drawer>
      </div>
    </div>
  );
}

/* Future Applications with Archiving
<ListItem 
button key={"k6"} 
component={Link}
to = {ROUTES.ARCHIVE}>
  <ListItemIcon>
    <HistoryIcon />
  </ListItemIcon>
  <ListItemText
    primary={"Archive"}
    onClick={handleDrawerClose}
    onClose={handleDrawerClose}
  />
</ListItem> 
*/

//Styling
const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
  },
 
  menuButton: {
    marginRight: theme.spacing(2),
  },
    title: {
    flexGrow: 1,
  },
}));

export default withFirebase(Navigation);
