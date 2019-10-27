var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)

var currentHour = new Date().getHours();//Current hour in military time

function currentDateTime() {
    var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
    document.getElementById("currentDate") = currentDateAndTime.getDate();
    
}