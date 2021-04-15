import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <VerifiedUserIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Users Details App
          </Typography>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Link to="home">
              {" "}
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                style={{ color: "white" }}
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="users">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                style={{ color: "white" }}
              >
                <GroupIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
