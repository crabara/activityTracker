import React from 'react';

import './styles.scss';

const ActivityEntry = ({ startTime, endTime, duration, description }, index) => (
    <tr key={index}>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{duration}</td>
        <td>{description}</td>
    </tr>
)

export default ActivityEntry;