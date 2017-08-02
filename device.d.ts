declare class Device {
    static getDeviceRootRelativePath(path: String, root: DeviceRoot);

    static getDeviceRootPath(root: DeviceRoot);

    static installApk(path: String): void;

    static uninstallApk(appPackage: String, keepData: boolean): void;

    static runShellCommand(command: string, allowRoot: boolean): { output: string, error: string };
}

declare type DeviceRoot = "SD_CARD" | "BITSHUTTLE_DIRECTORY"