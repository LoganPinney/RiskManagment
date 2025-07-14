const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadPresets: () => ipcRenderer.invoke('load-presets'),
  savePresets: (data) => ipcRenderer.invoke('save-presets', data)
});