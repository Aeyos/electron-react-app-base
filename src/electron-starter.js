const electron = require('electron');
let SetupWindow = require('./electron/SetupWindow');

const app = electron.app;
let mainWindow = null;

function createWindow() {
  mainWindow = SetupWindow();
  mainWindow.on('closed', function () {
    delete mainWindow;
  });
}

// APP READY
app.on('ready', () => {
  createWindow();
});

// ALL WINDOWS CLOSED
app.on('window-all-closed', () => {
  // On OS X recreate window
  if (process.platform !== 'darwin') {
    if (process.env.NODE_ENV === 'development') {
      delete require.cache[require.resolve('./electron/SetupWindow')]
      SetupWindow = require('./electron/SetupWindow');
      createWindow();
    } else {
      app.quit();
    }
  }
});

// OS X app activate
app.on('activate', () => {
  // OS X recreate window
  if (mainWindow === null) {
    createWindow();
  }
});
