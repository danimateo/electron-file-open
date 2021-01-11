declare module '@capacitor/core' {
  interface PluginRegistry {
    Electron: ElectronPlugin;
  }
}

export interface ElectronPlugin {
  openFile(options: { value: string }): void;
}
