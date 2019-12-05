import React from 'react';
import ActivityEntry from '../../components/ActivityEntry';

import './styles.scss';

const ActivityGrid = ({ records }) => (
    <div className="activityTableContainer">
        <table className="activityTable">
            <tbody>
            <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
            {records.map((record, index) =>
                ActivityEntry(record, index)
            )}
            </tbody>
        </table>
    </div>
)

export default ActivityGrid;