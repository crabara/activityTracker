import React from 'react';

import './styles.scss';

const TimeKeeper = ({ startHandler, nextHandler, endHandler, currentRecord }) => (
    <div className="timeKeeper">
        <div className="beginActivity">
            <h3>Start An Activity</h3>
            <div className="inputContainer">
            <label>Description</label>
            <input className="inputContainer__input"></input>
            <button className="inputContainer__btn" onClick={startHandler}>Begin activity</button>
            </div>
            
        </div>

        <div className="endActivity">
            <h3>End An Activity</h3>
            <div className="endActivity__description">current record description:{currentRecord ? currentRecord.description : ''}</div>
            <button className="endActivity__btnEnd" onClick={endHandler}>End activity</button>
        </div>
    </div>
)

export default TimeKeeper;