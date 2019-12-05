import React, { useEffect, useState, useRef } from 'react';
import { calcDuration } from '../../utils/setActivities';

import './styles.scss';

//Dan Abramov suggested usage https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  
function Duration({ startTime, endTime }) {
    const [duration, setDuration] = useState(calcDuration(startTime, endTime))
    useInterval(()=> {
       setDuration(calcDuration(startTime, endTime))
    }, !endTime ? 1000 : null)
  return (
  <td>{duration}</td>
  )
}

export default Duration;