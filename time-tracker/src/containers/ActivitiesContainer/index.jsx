import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ActivityGrid from '../../components/ActivityGrid';
import TimeKeeper from '../../components/TimeKeeper';

import { storeRecords, getRecords, calcDuration } from '../../utils/setActivities';

function ActivitiesContainer() {
    const [records, setRecords] = useState(() => getRecords());
    useEffect(() => storeRecords(records), [records])

    const endHandler = () => {
        let record = records.pop();
        record.duration = calcDuration(record.startTime, moment());
        record.endTime = moment().format('LTS');
        records.unshift(record);
        setRecords([...records]);
    }

    const startHandler = () => {
        const description = document.getElementsByClassName('inputContainer__input')[0].value;
        const startTime = moment();
        records.push({
            description,
            startTime: startTime,
        });
        setRecords([...records]);
    }
    return (
        <div className="App">
            <header className="App-header">
                <TimeKeeper
                    currentRecord={records[records.length - 1]}
                    startHandler={startHandler}
                    endHandler={endHandler}
                />
                <ActivityGrid records={records} />
            </header>
        </div>
    );
}

export default ActivitiesContainer;
