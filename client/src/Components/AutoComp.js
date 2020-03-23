import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import FullData from "../data/fullData.js";

const AutoComp = props => {
  return (
    <Autocomplete
      id="auto-highlight"
      autoHighlight
      className="textWhite"
      options={FullData}
      getOptionLabel={country => country.name}
      onChange={e => props.onChange(e)}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label="Location"
            onKeyPress={e => props.onKeyPess(e)}
            onChange={e => props.onChange(e)}
            style={{ margin: "0px 15% 10px 10%", width: "75%" }}
            margin="normal"
          />
        );
      }}
    />
  );
};

export default AutoComp;
