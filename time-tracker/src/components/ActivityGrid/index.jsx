import React, { useEffect } from 'react';
import { setStorageData } from '../../utils/setActivities';

import './styles.scss';

const ActivityGrid = () => {

    useEffect(() => {
        setStorageData();
    })

    return(
        <div className="activityTableContainer">
            <table className="activityTable">
                <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
                <th>Description</th>
                </tr> 
            </table>

        </div>
    )

}

export default ActivityGrid;