import React from 'react';
import moment from 'moment';
import Duration from '../Duration';

import './styles.scss';

const ActivityEntry = ({ startTime, endTime, description, duration }, index) => (
    <tr key={index}>
        <td>{moment(startTime).format('LTS')}</td>
        <td>{endTime}</td>
        {duration || <Duration startTime={startTime} endTime={endTime}/>}
        <td>{description}</td>
    </tr>
)

export default ActivityEntry;