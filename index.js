// Code your solution in this file!
const drivers = [ "Alice", "Bob", "Jane", "John" ];

let fare = 40;

const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2);
}

let selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

function createFareMultiplier(int) {
    return function(fare) {
        return (fare * int);
    }
}

const fareDoubler = function(fare) {
    return (fare) * 2;
}

const fareTripler = function(fare) {
    return (fare) * 3;
}

function selectDifferentDrivers(driversArray, functionReturn) {
    return functionReturn(driversArray);
}

returnFirstTwoDrivers(drivers);

returnLastTwoDrivers(drivers);