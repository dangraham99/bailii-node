const { app, Menu, Tray } = require('electron');
const path = require('path');

const { menubar } = require('menubar');

const iconPath = path.join(__dirname, 'node_modules', 'menubar', 'assets', 'IconTemplate.png');

app.on('ready', () => {
  const tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Close', role: 'quit', type: 'normal' }

  ]);
  tray.setContextMenu(contextMenu);

  const mb = menubar({
    tray
  });

  mb.on('ready', () => {
    console.log('Menubar app is ready.');
    // your app code here
  });
});