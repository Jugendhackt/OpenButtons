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

import CommandTableRow from "../parts/CustomTableRow";

const { exec } = require("child_process");

const ks = require("node-key-sender");
const bluetooth = require("node-bluetooth");
const BluetoothHandler = require("../parts/BluetoothHandler");

// create bluetooth device instance

//was soll ich tun? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

const commands = { up: "", down: "", left: "", right: "", pressed: "" };
const bthandler = new BluetoothHandler();

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTriggered: false,
      bottomTriggered: false,
      leftTriggered: false,
      rightTriggered: false,
      pressTriggered: false
    };
  }

  render() {
    bthandler.registerListener("joystick", data => {
      console.log(data);
      this.setState({
        topTriggered: data["y"] == "top",
        bottomTriggered: data["y"] == "bottom",
        rightTriggered: data["x"] == "right",
        leftTriggered: data["x"] == "left",
        pressTriggered: data["btn"] == "1"
      });

      switch (data["y"]) {
        case "top":
          ks.sendCombination(["@17", "@18", "@84"]);
          setTimeout(() => {
            ks.sendKeys([
              "e",
              "c",
              "h",
              "o",
              "@32",
              "H",
              "a",
              "l",
              "l",
              "o",
              "@523",
              "W",
              "e",
              "l",
              "t",
              "@10"
            ]);
          }, 2000);
          console.log(commands["up"]);
          break;
        case "bottom":
          console.log(commands["down"]);
          break;
      }
      switch (data["x"]) {
        case "right":
          console.log(commands["right"]);
          ks.sendKey("@39");
          //ks.sendCombination(["@18", "@39"]);
          break;
        case "left":
          console.log(commands["left"]);
          ks.sendKey("@37");
          //ks.sendCombination(["@18", "@37 "]);
          break;
      }
      if (data["btn"] == "1") {
        console.log(commands["pressed"]);
      }
    });

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
              ks.sendCombination(["alt", "tab"]);
            }}
          >
            Send
          </Button>
          <Button
            onClick={() => {
              exec('echo "SOME TEST!" && PAUSE', (err, stdout, stderr) => {
                if (err) {
                  // node couldn't execute the command
                  return;
                }

                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
              });
            }}
          >
            exec
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              bthandler.connect(() => {});
            }}
          >
            test
          </Button>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Joystick Direction</TableCell>
                  <TableCell align="left" style={{ width: "75%" }}>
                    Command
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <CommandTableRow
                  inputName="up"
                  onCommandChanged={newCommand => {
                    commands["up"] = newCommand;
                  }}
                  triggered={this.state.topTriggered}
                />
                <CommandTableRow
                  inputName="down"
                  onCommandChanged={newCommand => {
                    commands["down"] = newCommand;
                  }}
                  triggered={this.state.bottomTriggered}
                />
                <CommandTableRow
                  inputName="left"
                  onCommandChanged={newCommand => {
                    commands["left"] = newCommand;
                  }}
                  triggered={this.state.leftTriggered}
                />
                <CommandTableRow
                  inputName="right"
                  onCommandChanged={newCommand => {
                    commands["right"] = newCommand;
                  }}
                  triggered={this.state.rightTriggered}
                />
                <CommandTableRow
                  inputName="press"
                  onCommandChanged={newCommand => {
                    commands["press"] = newCommand;
                  }}
                  triggered={this.state.pressTriggered}
                />
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
