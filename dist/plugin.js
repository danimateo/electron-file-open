var openFilePlugin = (function (exports, core) {
    'use strict';

    class ElectronWeb extends core.WebPlugin {
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
    core.registerWebPlugin(ElectronPluginOpen);

    exports.ElectronPluginOpen = ElectronPluginOpen;
    exports.ElectronWeb = ElectronWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
