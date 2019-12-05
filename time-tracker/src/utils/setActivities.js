import moment from 'moment';

export const storeRecords = (records) => sessionStorage.setItem('records', JSON.stringify(records));

export const getRecords = () => {
    const records = sessionStorage.getItem('records');
    return records ? JSON.parse(records) : [];
};

export const calcDuration = (startTime, endTime) => moment.utc(moment(endTime).diff(startTime)).format('HH:mm:ss');
