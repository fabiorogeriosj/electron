var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var win = null;

app.on('ready', function (){
    win = new BrowserWindow({width:800, height:600});
    win.loadURL('file://' + __dirname + '/index.html');
    win.on('closed', () => {
        win = null
    });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
