//A variation of determining leap years, assuming only integers are used and years can be negative and positive.

//SOLUTION

function yearDays(year){
    if (year %4 !== 0 || year%100===0 && year %400 !==0) {
      return year + ' has 365 days'
    } else {
      return year + ' has 366 days'
    }
  }
