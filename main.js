const { app, Menu, Tray } = require('electron');
const path = require('path');

const { menubar } = require('menubar');

const iconPath = path.join(__dirname, 'node_modules', 'menubar', 'assets', 'IconTemplate.png');

app.on('ready', () => {
  const tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', role: 'quit', type: 'normal' }
  ]);

  if (process.platform == 'darwin'){
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Quit (macOS)', role: 'quit', type: 'normal'}
    ])
  }

  tray.setContextMenu(contextMenu);

  const mb = menubar({
    tray
  });

  mb.on('ready', () => {
    console.log('Menubar app is ready.');
    mb.setOption('width', 320)
    mb.setOption('height', 350)
    // your app code here
  });
});