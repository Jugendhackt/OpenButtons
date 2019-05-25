/* eslint global-require: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow } from "electron";

let mainWindow = null;

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("ready", async () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadFile(`${__dirname}/../renderer/app.html`);

  mainWindow.webContents.on("did-finish-load", () => {
    if (!mainWindow) throw new Error('"mainWindow" is not defined');

    if (process.env.START_MINIMIZED) mainWindow.minimize();
    else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.setMenuBarVisibility(false);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
