const { app, Menu, Tray, globalShortcut } = require('electron');
const path = require('path');
const os = require('os');
const { menubar } = require('menubar');


let mb = null


app.on('ready', () => {
  app.setAboutPanelOptions({
    applicationName: 'Refer',
    applicationVersion: 'v0.1',
    copyright: 'Daniel Graham',
    credits: 'Icons made by Freepik & Icon Pond from www.flaticon.com'
  })
  const tray = new Tray('IconTemplate@2x.png')
  
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
        {label: 'Open', click() {mb.showWindow()}, type: 'normal', accelerator: 'CmdOrCtrl+Shift+Q',},
        {role: 'about', type: 'normal'},
        {type: 'separator'},
        {role: 'quit', type: 'normal'}
      ])
    } else {
      return Menu.buildFromTemplate([
        {role: 'quit', type: 'normal'}
      ])
    }
  };

  const ret = globalShortcut.register('CommandOrControl+Shift+Q', () => {
    mb.showWindow()
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+Shift+Q'))

  mb.on('ready', () => {

    console.log('Menubar app is ready.');
    mb.setOption('width', 320)
    mb.setOption('height', 250)
    mb.tray.setContextMenu(contextMenuContents())
    mb.tray.setHighlightMode('selection')
  });


});

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+Shift+Q')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
});