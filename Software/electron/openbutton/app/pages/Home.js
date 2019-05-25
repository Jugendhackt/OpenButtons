import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core";
//const ks = require("node-key-sender");
const bluetooth = require("node-bluetooth");

// create bluetooth device instance

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: {
        top: "",
        bottom: "",
        left: "",
        right: "",
        pressed: ""
      }
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
        <div style={{ margin: "16px" }}>
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
            }}
          >
            Send
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const device = new bluetooth.DeviceINQ();

              device
                .on("finished", console.log.bind(console, "finished"))
                .on("found", function found(address, name) {
                  if (name == "Joystick") {
                    device.findSerialPortChannel(address, channel => {
                      console.log(channel);
                      bluetooth.connect(address, channel, (err, connection) => {
                        if (err) return console.error(err);
                        connection.on("data", buffer =>
                          console.log(JSON.parse(buffer.toString()))
                        );
                      });
                    });
                  }
                })
                .scan();
            }}
          >
            test
          </Button>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Joystick Direction</TableCell>
                  <TableCell align="right">Command</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="up">
                  <TableCell component="th" scope="row">
                    up
                  </TableCell>
                  <TableCell align="right">
                    <TextField value="give in cmd" />
                  </TableCell>
                </TableRow>
                <TableRow key="down">
                  <TableCell component="th" scope="row">
                    down
                  </TableCell>
                  <TableCell align="right">
                    <TextField value="give in cmd" />
                  </TableCell>
                </TableRow>
                <TableRow key="right">
                  <TableCell component="th" scope="row">
                    right
                  </TableCell>
                  <TableCell align="right">
                    <TextField value="give in cmd" />
                  </TableCell>
                </TableRow>
                <TableRow key="left">
                  <TableCell component="th" scope="row">
                    left
                  </TableCell>
                  <TableCell align="right">
                    <TextField value="give in cmd" />
                  </TableCell>
                </TableRow>
                <TableRow key="press">
                  <TableCell component="th" scope="row">
                    press
                  </TableCell>
                  <TableCell align="right">
                    <TextField value="give in cmd" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
