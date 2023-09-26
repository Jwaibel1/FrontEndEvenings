function leap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "The year ".concat(year, " is a leap year.");
        /* console.log(`The year ${year} is a leap year.`); */
    }
    else {
        return "The year ".concat(year, " is NOT a leap year.");
        /* console.log(`The year ${year} is NOT a leap year.`); */
    }
}
console.log(leap(2023));
console.log(leap(2000));
