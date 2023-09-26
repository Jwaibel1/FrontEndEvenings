function leap(year: number): string {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return `The year ${year} is a leap year.`;
    /* console.log(`The year ${year} is a leap year.`); */
  } else {
    return `The year ${year} is NOT a leap year.`;
    /* console.log(`The year ${year} is NOT a leap year.`); */
  }
}

console.log(leap(2023));
console.log(leap(2000));
