import React from "react";
import { TableRow, TableCell, TextField } from "@material-ui/core";

const UUIDv4 = require("uuid/v4");

export default class CustomTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldValue: ""
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
        <TableCell align="left" style={{ width: "75%" }}>
          <TextField
            style={{ width: "100%" }}
            defaultValue={this.state.oldValue}
            label="Command"
            onBlur={e => {
              if (this.state.oldValue != e.target.value) {
                if (this.props.onCommandChanged != null)
                  this.props.onCommandChanged(e.target.value);
                this.setState({
                  oldValue: e.target.value
                });
              }
            }}
          />
        </TableCell>
      </TableRow>
    );
  }
}
