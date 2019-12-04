import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ActivityGrid from '../../components/ActivityGrid';
import TimeKeeper from '../../components/TimeKeeper';

import { storeRecords, getRecords } from '../../utils/setActivities';




function ActivitiesContainer() {
    const [records, setRecords] = useState(() => getRecords());
    // const [timer, setTimer] = useState(() => setInterval);

    useEffect(() => storeRecords(records), [records])


    const endHandler = () => {
        let record = records.pop();
        record.endTime = moment();
        records.push(record);
        setRecords([...records]);
    }

    // const durationTimeOut = (startTime) => {
    //     return function() {
    //        let elapsedDuration = moment().diff(startTime);
    //         records[0].duration = moment.utc(elapsedDuration).format('HH:mm:ss');
    //         setRecords([...records]);

    //     }

    // }

    const startHandler = () => {
        const description = document.getElementsByClassName('beginActivity__description')[0].value;

         const startTime = moment();
    // //    let elapsedDuration =  moment.utc(moment.duration(moment().diff(startTime), "seconds").asMilliseconds()).format("HH:mm")

    // const elapsedDuration = moment.duration(moment().diff(startTime));
    // let start = startTime.format('HH:mm:ss');
    // let newStart = moment(start, 'HH:mm:ss');
    // let minutesPassed = moment.duration(moment().diff(start, 'seconds'));

    // moment.duration(end.diff(start)).humanize();

    // const timer = setInterval(durationTimeOut(startTime), 1000)
        records.push({
            description,
            startTime: startTime,
            endTime: '',
            // duration: useInterval(durationTimeOut(startTime), 1000),      
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
