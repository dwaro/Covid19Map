import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Data from "../data/cases";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rgb(40,40,40)",
    position: "relative",
    overflow: "auto",
    maxHeight: "47%"
  },
  listSection: {
    backgroundColor: "rgb(40,40,40)"
  },
  ul: {
    backgroundColor: "rgb(40,40,40)",
    padding: 0
  }
}));

const Top2 = props => {
  const classes = useStyles();

  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        position: "absolute",
        right: 0,
        top: 0,
        left: "50%",
        bottom: 0
      }}
    >
      <List className={classes.root}>
        <li className={classes.listSection}>
          <ul className={classes.ul}>
            {Data.map(location => (
              <ListItem
                key={`${location.name}`}
                style={{
                  backgroundColor: "rgb(40,40,40)",
                  color: "white",
                  borderBottom: "solid 1px white"
                }}
              >
                <ListItemText
                  primary={
                    <div>
                      <span
                        style={{
                          fontWeight: "bold"
                        }}
                      >
                        {location.name}
                      </span>
                      : {location.total}
                    </div>
                  }
                />
              </ListItem>
            ))}
          </ul>
        </li>
      </List>
    </div>
  );
};

export default Top2;
