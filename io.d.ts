declare class IO {
    static copyFile(source: String, destination: String): void;

    static deleteFile(path: String): boolean;

    static moveFile(source: String, destination: String): void;

    static unzipFile(sourceZip: String, path: String, destination: String): void;

    static writeFileContent(content: String, destination: String, append: boolean): void;

    static readFileContent(source: String): String;
}