export const storeRecords = (records) => sessionStorage.setItem('records', JSON.stringify(records));

export const getRecords = () => JSON.parse(sessionStorage.getItem('records') || [] );