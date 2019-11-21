export const setActitivies = () => {
    const desc =  document.getElementsByClassName('beginActivity__description')[0].value;
    const time = document.getElementsByClassName('beginActivity__startTime')[0].value;
    localStorage.setItem('description', desc);
    localStorage.setItem('startTime', time);
    
    setTable(time, '', '', desc);
}

export const setTable = (startTime, endTime, duration, description) => {
     
    const table = document.getElementsByClassName('activityTable')[0];
    const row = table.insertRow(1);
    const startTimeCell = row.insertCell(0);
    const endTimeCell = row.insertCell(1);
    const durationCell = row.insertCell(2);
    const descriptionCell = row.insertCell(3);
 
    startTimeCell.innerHTML = startTime;
    endTimeCell.innerHTML = endTime;
    durationCell.innerHTML = duration; //neeeds some calculation
    descriptionCell.innerHTML = description;
    //durationCell.innerHtml(Timr.hg   ) set timer since start time
}

export const setStorageData = () => {
    let records = localStorage.getItem('records');
    if(!records) return;
   records = JSON.parse(records);
   records.forEach(({startTime, endTime = '', duration = '', description}) => setTable(startTime, endTime, duration, description))};