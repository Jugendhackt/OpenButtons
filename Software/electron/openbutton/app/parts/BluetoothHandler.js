const bluetooth = require("node-bluetooth");

module.exports = class BluetoothHandler {
  constructor() {
    this._listeners = {};
    this._connected = false;
  }

  connect(cb) {
    if (!this._connected) {
      const device = new bluetooth.DeviceINQ();
      this._connected = true;
      device
        .on("finished", console.log.bind(console, "finished"))
        .on(
          "found",
          function found(address, name) {
            if (name == "Joystick") {
              device.findSerialPortChannel(
                address,
                (channel => {
                  bluetooth.connect(address, channel, (err, connection) => {
                    if (err) {
                      if (typeof cb == typeof (() => {})) cb(false);
                      return console.error(err);
                    }
                    cb(true);
                    connection.on(
                      "data",
                      (buffer => {
                        if (buffer.toString().trim() != "") {
                          try {
                            const joystick = JSON.parse(buffer.toString());
                            Object.keys(this._listeners).forEach(key => {
                              if (
                                typeof this._listeners[key] == typeof (() => {})
                              )
                                this._listeners[key](joystick);
                            });
                          } catch (e) {
                            console.error(e);
                          }
                        }
                      }).bind(this)
                    );
                  });
                }).bind(this)
              );
            }
          }.bind(this)
        )
        .scan();
    }
  }

  registerListener(name, cb) {
    this._listeners[name] = cb;
  }
};
