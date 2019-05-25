import React from "react";
import { TableRow, TableCell, TextField } from "@material-ui/core";

const UUIDv4 = require("uuid/v4");

export default class CustomTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    const key = `${this.props.inputName}---${UUIDv4()}`;

    return (
      <TableRow
        key={key}
        style={{
          backgroundColor: this.props.triggered ? "#ff0000" : "inherit"
        }}
      >
        <TableCell component="th" scope="row">
          {this.props.inputName}
        </TableCell>
        <TableCell align="right">
          <TextField
            value="give in cmd"
            onBlur={e => {
              this.setState({ value: e.target.value });
            }}
          />
        </TableCell>
      </TableRow>
    );
  }
}
