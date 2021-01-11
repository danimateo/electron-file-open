import { WebPlugin } from '@capacitor/core';
export class ElectronWeb extends WebPlugin {
    constructor() {
        super({
            name: 'ElectronPluginOpen',
            platforms: ['web'],
        });
    }
    openFile(options) {
        console.log('ECHO', options);
    }
}
const ElectronPluginOpen = new ElectronWeb();
export { ElectronPluginOpen };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ElectronPluginOpen);
//# sourceMappingURL=web.js.map