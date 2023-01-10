/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function (array) {
    const employeeObj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeObj;
};

let createEmployeeRecords = function (array) {
    return array.map(function (employee) {
        return createEmployeeRecord(employee);
    })
}

let createTimeInEvent = function (dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(time, 10),
        date: date
    })
    return this;
}

let createTimeOutEvent = function (dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time, 10),
        date: date
    })
    return this;
}

let hoursWorkedOnDate = function (date) {
    const timeInEvents = this.timeInEvents;
    const timeOutEvents = this.timeOutEvents;
    const timeIn = timeInEvents.find(element => element.date === date);
    const timeOut = timeOutEvents.find(element => element.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

let wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

let findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find(element => element.firstName === firstName);
}

let calculatePayroll = function (array) {
    return array.reduce(function (acc, employee) {
        return acc + allWagesFor.call(employee)
    }, 0)
}