declare class Device {
    static getDeviceRootRelativePath(path: string, root: DeviceRoot);

    static getDeviceRootPath(root: DeviceRoot);

    static installApk(path: string): void;

    static uninstallApk(appPackage: string, keepData: boolean): void;

    static runShellCommand(command: string, allowRoot: boolean): { output: string, error: string };
}

declare type DeviceRoot = "SD_CARD" | "BITSHUTTLE_DIRECTORY"