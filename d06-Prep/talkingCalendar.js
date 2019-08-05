const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

const firstDays = {
  '01': '1st',
  '02': '2nd',
  '03': '3rd',
  '21': '21st',
  '22': '22nd',
  '23': '23rd',
  '31': '31st'
};

let talkingCalendar = function(date) {
  const dateSplitted = date.split("/");
  let result = '';
  // console.log(dateSplitted);

  result = result.concat(months[dateSplitted[1]], ' ');
  // console.log(result);

  if (dateSplitted[2] in firstDays) {
    result = result.concat(firstDays[dateSplitted[2]], ', ');
  } else {
    result = result.concat(dateSplitted[2].startsWith('0', 0) ? dateSplitted[2][1]: dateSplitted[2], 'th, ');
  }
  // console.log(result);

  result = result.concat(dateSplitted[0]);

  // console.log(result);
  return result;
};

console.log(talkingCalendar("2017/12/02")); //December 2nd, 2017
console.log(talkingCalendar("2007/11/07")); //November 7th, 2007
console.log(talkingCalendar("1987/08/10")); //August 10th, 1987
