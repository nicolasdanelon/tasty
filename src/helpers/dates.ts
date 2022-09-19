// https://stackoverflow.com/a/50398144/1504286
export const getDaysArray = (start: Date, end: Date) => {
  let arr;
  let dt;
  for (
    arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(
      new Date(dt).toISOString().slice(5, 10).split("-").reverse().join("/")
    );
  }
  return arr;
};

// https://stackoverflow.com/a/3818198/1504286
export const daysFromToday = (numberOfDaysToAdd: number = 4) => {
  const today = new Date();
  const result = today.setDate(today.getDate() + numberOfDaysToAdd);
  return new Date(result);
};
