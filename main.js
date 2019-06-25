const { app, Menu, Tray } = require('electron');
const path = require('path');
const os = require('os');
const { menubar } = require('menubar');
const iconPath = path.join(__dirname, 'node_modules', 'menubar', 'assets', 'IconTemplate.png');

let mb = null


app.on('ready', () => {
  const tray = new Tray(iconPath)
  
  mb = menubar({
    tray,
    browserWindow: {
      webPreferences: {
        nodeIntegration: true
      }
    }
  });


  function contextMenuContents(){
    if (process.platform == 'darwin') {
      return Menu.buildFromTemplate([
        {label: 'Open', click() {mb.showWindow()}, type: 'normal'},
        {label: 'About', role: 'about', type: 'normal'},
        {type: 'separator'},
        {role: 'quit', type: 'normal'}
      ])
    } else {
      return Menu.buildFromTemplate([
        {role: 'quit', type: 'normal'}
      ])
    }
  };

  
  mb.on('ready', () => {
    console.log('Menubar app is ready.');
    mb.setOption('width', 320)
    mb.setOption('height', 350)
    mb.tray.setContextMenu(contextMenuContents())
  });

  mb.on('after-create-window', () => {
    mb.window.openDevTools({mode: 'detach'})
  })
});