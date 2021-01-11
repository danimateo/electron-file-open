import { WebPlugin } from '@capacitor/core';
import { ElectronPlugin } from './definitions';
export declare class ElectronWeb extends WebPlugin implements ElectronPlugin {
    constructor();
    openFile(options: {
        value: string;
    }): void;
}
declare const ElectronPluginOpen: ElectronWeb;
export { ElectronPluginOpen };
