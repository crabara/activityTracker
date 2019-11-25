import React from 'react';

import './styles.scss';

const TimeKeeper = ({ startHandler, endHandler, currentRecord }) => (
    <div className="timeKeeper">
        <div className="beginActivity">
            <h1>Start An Activity</h1>
            <label>Description</label>
            <input className="beginActivity__description"></input>
            <button className="beginActivity__btn" onClick={startHandler}>Begin activity</button>
        </div>

        <div className="endActivity">
            <h1>End An Activity</h1>
            <div className="endActivity__description">{currentRecord ? currentRecord.description : ''}</div>
            <button className="endActivity__btnEnd" onClick={endHandler}>End activity</button>
        </div>
    </div>
)

export default TimeKeeper;