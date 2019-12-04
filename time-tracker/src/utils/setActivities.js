export const storeRecords = (records) => sessionStorage.setItem('records', JSON.stringify(records));

export const getRecords = () => {
    const records = sessionStorage.getItem('records');
    return records ? JSON.parse(records) : [];
};