import { WebPlugin } from '@capacitor/core';
import { ElectronPlugin } from './definitions';
const { ipcRenderer } = require('electron');

export class ElectronPluginWeb extends WebPlugin implements ElectronPlugin {
  Path: any = null;
  NodeFs: any = null;

  constructor() {
    super({
      name: 'ElectronPluginOpen',
      platforms: ['electron'],
    });
    console.log('ElectronPlugin');
    this.Path = require('path');
    this.NodeFs = require('fs');
  }

  openFile(options: { value: string }): void {
    ipcRenderer.send('open-file', options.value);
  }
}

const ElectronPluginOpen = new ElectronPluginWeb();

export { ElectronPluginOpen };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ElectronPluginOpen);
