import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Summary from "../data/summary";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundImage:
            "linear-gradient(-90deg, #990000, rgb(40,40,40), rgb(40,40,40))"
        }}
      >
        <Toolbar>
          {/*}<IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>*/}
          <Typography variant="h6" color="inherit">
            COVID-19 Map
          </Typography>
          <div
            style={{
              position: "absolute",
              right: 0,
              margin: "0px 50px 20px 50px"
            }}
          >
            Data last updated: {`${Summary.Time}`}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
