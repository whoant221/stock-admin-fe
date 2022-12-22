//Tạo local storage
// Hàm tạ<o></o>
const createStorage = (LOCAL_STORAGE_KEY) => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {}

    return {
        get(key) {      
            return storage[key]
        },
        set(key, value) {
            storage[key] = value;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
        },
        remove(key) {
            delete storage[key];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
        }
    }
}

const storage = createStorage("blockchainAdmin")
const PROFILE_CLIENT = 'info_client';
const NAME_BANK = 'name_bank';
const NAME_STOCK = 'name_stock';

const blockChainStorage = {
    setInfoClient: (data) => storage.set(PROFILE_CLIENT, data),
    getInfoClient: () => storage.get(PROFILE_CLIENT),
    removeInfoClient: () => storage.remove(PROFILE_CLIENT),

    setNameBank: (data) => storage.set(NAME_BANK, data),
    getNameBank: () => storage.get(NAME_BANK),

    setNameStock: (data) => storage.set(NAME_STOCK, data),
    getNameStock: () => storage.get(NAME_STOCK),
    
}


export default blockChainStorage;