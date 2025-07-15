const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const userDataPath = app.getPath('userData');
const presetsFile = path.join(userDataPath, 'presets.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.handle('load-presets', async () => {
  try {
    if (!fs.existsSync(presetsFile)) {
      fs.writeFileSync(presetsFile, JSON.stringify({}));
    }
    const raw = fs.readFileSync(presetsFile);
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
});

ipcMain.handle('save-presets', async (_, data) => {
  fs.writeFileSync(presetsFile, JSON.stringify(data, null, 2));
  return true;
});
package.json
