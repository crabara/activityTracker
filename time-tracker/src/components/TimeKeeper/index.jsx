import React, { useState } from 'react';


import './styles.scss';

const TimeKeeper = () => {

    const [ currentRecord, setCurrentRecord ] = useState({
        description: ''
    });

  const handleStartClick = () => {
   const description =  document.getElementsByClassName('beginActivity__description')[0].value;
   const startTime = document.getElementsByClassName('beginActivity__startTime')[0].value;
   let records = localStorage.getItem('records');
   if(!records) {
       records = []
   }
   const newRecord = {
       description,
       startTime
    }
    records = JSON.parse(records);
    records.push(newRecord);
   localStorage.setItem('records', JSON.stringify(records));

   const table = document.getElementsByClassName('activityTable')[0];
   const row = table.insertRow(1);
   const startTimeCell = row.insertCell(0);
   const endTimeCell = row.insertCell(1);
   const durationCell = row.insertCell(2);
   const descriptionCell = row.insertCell(3);

   startTimeCell.innerHTML = startTime;
   descriptionCell.innerHTML = description;
   //durationCell.innerHtml(Timr.hg   ) set timer since start time

  }

  const handleEndClick = () => {

  }

  const handleNextClick = () => {
    let records = localStorage.getItem('records');
    records = JSON.parse(records);
    records = records.values();
    setCurrentRecord(records.next().value)

  }
     return(
            <div className="timeKeeper">
                <div className="beginActivity">       
                <h1>Start An Activity</h1>
                <input className="beginActivity__description"></input>
                <input className="beginActivity__startTime"></input>
                <button className="beginActivity__btn" onClick={handleStartClick}>Begin activity</button>
                </div>
                
                <div className="endActivity">
                <h1>End An Activity</h1>
                <div className="endActivity__description">{currentRecord.description}</div>
                <button className="endActivity__btnNext" onClick={handleNextClick}>Next Activity</button>
                <button className="endActivity__btnEnd" onClick={handleEndClick}>End activity</button>
                </div>
            </div>
           
    )

}

export default TimeKeeper;