declare class Update {
    static extractAsset(path: string, destinationPath: string);
    static extractExtension(extension: string, path: string, destinationPath: string)
    static getTransferDirectoryRelativePath(path: string): string;
}
