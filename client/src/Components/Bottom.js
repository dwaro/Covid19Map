import React, { Component } from "react";
import Chart from "./Chart";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: "days",
      classes: this.useStyles()
    };
    this.handleChange = this.handleChange.bind(this);
    this.useStyles = this.useStyles.bind(this);
  }

  data() {
    return [10, 5, 15, 25, 20];
  }

  handleChange(event) {
    const val = event.target.value;
    this.setState({
      interval: val
    });
  }

  useStyles() {
    return makeStyles(theme => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      }
    }));
  }

  render() {
    return (
      <div
        style={{
          height: "50%",
          width: "100%",
          top: "50%",
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute"
        }}
      >
        <FormControl
          className={this.state.classes.formControl}
          style={{ left: 20, top: 20, width: 130, zIndex: 10 }}
        >
          <InputLabel>Time Interval</InputLabel>
          <Select
            native
            value={this.state.interval}
            onChange={e => this.handleChange(e)}
          >
            <option aria-label="None" value="" />
            <option value={"days"}>Days</option>
            <option value={"weeks"}>Weeks</option>
            <option value={"months"}>Months</option>
          </Select>
        </FormControl>
        <Chart data={this.data()} width="100%" height="100%" />
      </div>
    );
  }
}

export default Bottom;
