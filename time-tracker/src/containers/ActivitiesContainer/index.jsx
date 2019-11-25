import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ActivityGrid from '../../components/ActivityGrid';
import TimeKeeper from '../../components/TimeKeeper';

import { storeRecords, getRecords } from '../../utils/setActivities';

function ActivitiesContainer() {
    const [records, setRecords] = useState(() => getRecords());

    useEffect(() => storeRecords(records), [records])

    const endHandler = () => {
        let record = records.pop();
        record.endTime = moment().format('LTS');
        records.push(record);
        setRecords([...records]);
    }

    const startHandler = () => {
        const description = document.getElementsByClassName('beginActivity__description')[0].value;
        const startTime = new moment();
        records.push({
            description,
            startTime: startTime.format('LTS'),
            duration: moment().from(startTime),      
        });
        setRecords([...records]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <TimeKeeper
                    currentRecord={records[0]}
                    startHandler={startHandler}
                    endHandler={endHandler}
                />
                <ActivityGrid records={records} />
            </header>
        </div>
    );
}

export default ActivitiesContainer;
