declare class IO {
    static copyFile(source: string, destination: string): void;

    static deleteFile(path: string): boolean;

    static moveFile(source: string, destination: string): void;

    static unzipFile(sourceZip: string, path: string, destination: string): void;

    static writeFileContent(content: string, destination: string, append: boolean): void;

    static readFileContent(source: string): string;
}