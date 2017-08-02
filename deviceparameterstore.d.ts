declare class DeviceParameterStore {
    static setAssetTag(value: string): void;
    static getAssetTag(): string;

    static setStartupActivity(activityClass: String, appPackage: String): void;

    static setString(key: string, value: string): void;
    static getString(key: string): string;

    static setString(key: string, value: string): void;
    static getString(key: string): string;

    static setStringArray(key: string, value: string[]): void;
    static getStringArray(key: string): string[];

    static setNumber(key: number, value: number): void;
    static getNumber(key: number): number;

    static setNumberArray(key: number, value: number[]): void;
    static getNumberArray(key: number): number[];

    static setBoolean(key: boolean, value: boolean): void;
    static getBoolean(key: boolean): boolean;

    static setBooleanArray(key: boolean, value: boolean[]): void;
    static getBooleanArray(key: boolean): boolean[];
}