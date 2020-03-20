import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Top1 = props => {
  const classes = useStyles();

  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0
      }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Scale"
          defaultValue="Global"
          className="textWhite"
          style={{ margin: "20px 40% 20px 10%", width: "50%" }}
        />
        <TextField
          label="Total Cases"
          defaultValue="250,000"
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
        <TextField
          label="Recoveries"
          defaultValue="100,000"
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
        <TextField
          label="Deaths"
          defaultValue="10,000"
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
      </form>
    </div>
  );
};

export default Top1;
