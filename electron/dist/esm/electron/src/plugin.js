import { WebPlugin } from '@capacitor/core';
const { ipcRenderer, shell } = require('electron');
export class ElectronPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'ElectronPluginOpen',
            platforms: ['electron'],
        });
        this.Path = null;
        this.NodeFs = null;
        console.log('ElectronPlugin');
        this.Path = require('path');
        this.NodeFs = require('fs');
    }
    openFile(options) {
        ipcRenderer.send('open-file', options.value);
        console.log('called plugin');
        shell.openExternal(options.value);
    }
}
const ElectronPluginOpen = new ElectronPluginWeb();
export { ElectronPluginOpen };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ElectronPluginOpen);
//# sourceMappingURL=plugin.js.map