// Basic init
const { app, BrowserWindow } = require('electron');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
})
