import {
  differenceInMonths,
  differenceInCalendarDays,
  add,
  formatDistanceStrict,
} from "date-fns";

// calcualte the difference in days months years
export function calculateYearsMonthsDays(sDate, eDate) {
  if (sDate.getTime() < eDate.getTime()) {
    const sYear = sDate.getFullYear();
    const sMonth = sDate.getMonth();
    const sDay = sDate.getDate();

    const eYear = eDate.getFullYear();
    const eMonth = eDate.getMonth();
    const eDay = eDate.getDate();

    let dDay = eDay - sDay;
    let dMonth = eMonth - sMonth;
    let dYear = eYear - sYear;

    if (dDay < 0) {
      dDay = eDay + 30 - sDay;
      dMonth -= 1;
    }

    if (dMonth < 0) {
      dMonth = eMonth + 12 - sMonth;
      dYear -= 1;
    }

    return [dYear, dMonth, dDay];
  } else {
    return null;
  }
}

export function calculateTotalRent(durationArray, totalMonthlyPayment) {
  const days = durationArray[2];
  const months = durationArray[1];
  const years = durationArray[0];

  const total = totalMonthlyPayment * (years * 12 + months + days / 30);

  return total;
}
