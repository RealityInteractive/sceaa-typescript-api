declare interface Configuration {
    name: string;
    id: string;
    version: number;
    description: string;
    apps: string[];
    files: string[];
    configure(): void;
}