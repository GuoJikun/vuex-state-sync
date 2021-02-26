declare type storageValue = string | number | null | undefined;
interface Record {
    [key: string]: unknown;
}
interface Storage {
    setItem: (key: string, value: storageValue) => void;
    getItem: (key: string) => string;
    clear: () => void;
}
interface Option {
    key?: string;
    storage?: Storage;
    reducer?: (val: Record) => Record;
}
declare const createSyncState: (opt: Option) => (store: any) => void;
export default createSyncState;
