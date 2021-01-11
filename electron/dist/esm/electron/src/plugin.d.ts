import { WebPlugin } from '@capacitor/core';
import { ElectronPlugin } from './definitions';
export declare class ElectronPluginWeb extends WebPlugin implements ElectronPlugin {
    Path: any;
    NodeFs: any;
    constructor();
    openFile(options: {
        value: string;
    }): void;
}
declare const ElectronPluginOpen: ElectronPluginWeb;
export { ElectronPluginOpen };
