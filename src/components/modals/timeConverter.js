function testDate(time) {
    let inputDate = new Date(time)
    return inputDate.toString()
}

function combineDates(date, time) {
    let combinedDate = date.concat('T', time, ':00')
    return combinedDate
}

var importedDate = combineDates('2022-01-26', '19:00');

// console.log(TimeConverter('7:00 PM'));
console.log(testDate('1995-12-17T13:24:00'));
console.log(testDate(importedDate));
// console.log(combineDates('2022-01-26', '19:00'));