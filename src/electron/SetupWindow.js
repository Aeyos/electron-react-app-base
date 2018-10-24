// Module to create native browser window.
const electron = require('electron');
const url = require('url');
const path = require('path');

const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;

function CreateWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({ width: 1280, height: 720 });

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.loadURL(startUrl);

  // Remove instant focus on dev tools
  mainWindow.webContents.on('devtools-opened', () => {
    setImmediate(function() {
      mainWindow.webContents.focus();
    });
  });
  mainWindow.webContents.openDevTools();

  // Define menu template
  const template = [
    {
      label: 'File',
      submenu: [{
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click (item, focusedWindow) {
          dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }, (filePaths, bookmark) => {
            focusedWindow.webContents.send('console-log', filePaths, bookmark);
          });
        }
      }]
    }, {
      label: 'Edit',
      submenu: [
      {
        role: 'undo'
      }, {
        role: 'redo'
      }, {
        type: 'separator'
      }, {
        role: 'cut'
      }, {
        role: 'copy'
      }, {
        role: 'paste'
      }, {
        role: 'pasteandmatchstyle'
      }, {
        role: 'delete'
      }, {
        role: 'selectall'
      }
      ]
    }, {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click (item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload()
          }
        }, {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click (item, focusedWindow) {
            if (focusedWindow) focusedWindow.webContents.toggleDevTools()
          }
        }, {
          type: 'separator'
        }, {
          role: 'resetzoom'
        }, {
          role: 'zoomin'
        }, {
          role: 'zoomout'
        }, {
          type: 'separator'
        }, {
          role: 'togglefullscreen'
        }
      ]
    }, {
      role: 'window',
      submenu: [
        {
          role: 'minimize'
        }, {
          role: 'close'
        }
      ]
    }, {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('http://google.com') }
        },{
          label: 'OE!',
          click () { require('electron').shell.openExternal('http://aeyos.com') }
        }
      ]
    }
  ];

  // Build menu template
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

  return mainWindow;
}

module.exports = CreateWindow;
