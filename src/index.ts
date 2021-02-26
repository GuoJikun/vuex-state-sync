type storageValue = string | number | null | undefined;

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

const DEFAULTOPTIONS: Option = {
  key: "vuex",
  storage: localStorage,
  reducer: (val: Record): Record => {
    return val;
  },
};

const createSyncState = (opt: Option) => {
  const opts = Object.assign(DEFAULTOPTIONS, opt);
  const cache: string = opts.storage.getItem(opts.key);
  return (store: any) => {
    if (cache) {
      const entries = Object.entries(JSON.parse(cache));
      for (const [key, value] of entries) {
        store.commit(key, value);
      }
    }

    store.subscribe((mutation: any, state: Record) => {
      const cacheData = opts.reducer(state);
      opts.storage.setItem(opts.key, JSON.stringify(cacheData));
    });
  };
};

export default createSyncState;
