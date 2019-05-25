import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
const ks = require("node-key-sender");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ""
    };
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Shortcuts</Typography>
          </Toolbar>
        </AppBar>
        <TextField
          value={this.state.textFieldValue}
          onChange={e => {
            this.setState({
              textFieldValue: e.target.value[e.target.value.length - 1]
            });
          }}
        />
        <Button
          onClick={() => {
            console.log(this.state.textFieldValue);
            ks.sendCombination(["@524", "@83"]);
          }}
        >
          Send
        </Button>
      </div>
    );
  }
}
