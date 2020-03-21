import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Summary from "../data/summary";

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
          style={{ margin: "0px 15% 10px 10%", width: "75%" }}
        />
        <TextField
          label="Total Cases"
          defaultValue={Summary.Total}
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
        <TextField
          label="Recoveries"
          defaultValue={Summary.Recoveries}
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
        <TextField
          label="Deaths"
          defaultValue={Summary.Deaths}
          variant="outlined"
          disabled
          style={{ margin: "10px 20% 10px 10%", width: "70%" }}
        />
      </form>
    </div>
  );
};

export default Top1;
