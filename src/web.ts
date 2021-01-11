import { WebPlugin } from '@capacitor/core';
import { ElectronPlugin } from './definitions';

export class ElectronWeb extends WebPlugin implements ElectronPlugin {
  constructor() {
    super({
      name: 'ElectronPluginOpen',
      platforms: ['web'],
    });
  }

  openFile(options: { value: string }): void {
    console.log('ECHO', options);
  }
}

const ElectronPluginOpen = new ElectronWeb();

export { ElectronPluginOpen };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ElectronPluginOpen);
