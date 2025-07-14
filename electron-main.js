const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const fs = require('fs');
const userDataPath = app.getPath('userData');
const presetsFile = join(userDataPath, 'presets.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.handle('load-presets', async () => {
  try {
    if (!fs.existsSync(presetsFile)) fs.writeFileSync(presetsFile, JSON.stringify({}));
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