import React from 'react';
import moment from 'moment';
import Duration from '../Duration';

import './styles.scss';

const ActivityEntry = ({ startTime, endTime, description }, index) => (
    <tr key={index}>
        <td>{typeof (startTime) === 'string' ? moment(startTime).format('LTS') : startTime.format('LTS')}</td>
        <td>{endTime}</td>
        <Duration
            startTime={startTime}
            endTime={endTime}
        />
        <td>{description}</td>
    </tr>

)

export default ActivityEntry;