import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Summary from "../data/summary";
import FullData from "../data/fullData.js";
import AutoComp from "./AutoComp";

class Top1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Global",
      classes: this.useStyles(),
      total: Summary.Total,
      recoveries: Summary.Recoveries,
      deaths: Summary.Deaths
    };
    this.useStyles = this.useStyles.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  useStyles() {
    return makeStyles(theme => ({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch"
        }
      }
    }));
  }

  updateCountry(e) {
    let val;
    val = e.target.value === 0 ? e.target.textContent : e.target.value;
    let country = FullData.find(loc => loc.name === val);

    this.setState({
      country: val
    });

    if (typeof country !== "undefined") {
      this.setState({
        total: country.total,
        recoveries: country.recovered,
        deaths: country.deaths
      });
    }
  }

  keyPressed(keyVal) {
    if (keyVal.key === "Enter") {
      let country = FullData.find(loc => loc.name === this.state.country);
      if (typeof country !== "undefined") {
        this.setState({
          total: country.total,
          recoveries: country.recovered,
          deaths: country.deaths
        });
      }
    }
  }

  render() {
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
        <form className={this.state.classes.root} noValidate autoComplete="off">
          <AutoComp onChange={this.updateCountry} onKeyPess={this.keyPressed} />
          {[
            ["Total Cases", this.state.total],
            ["Recoveries", this.state.recoveries],
            ["Deaths", this.state.deaths]
          ].map(item => (
            <TextField
              label={item[0]}
              value={item[1]}
              variant="outlined"
              disabled
              style={{ margin: "10px 20% 10px 10%", width: "70%" }}
            />
          ))}
        </form>
      </div>
    );
  }
}

export default Top1;
