export const TimeConvertor = (time) => {
  console.log(time);
  const timeConvert = time.split("T")[0];

  return timeConvert;
};

export const TimeRecurConvertor = (time) => {
  return new Date(time).toISOString().split("T")[0];
};
