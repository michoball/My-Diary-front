export const TimeConvertor = (time) => {
  const timeConvert = new Date(time).toISOString().split(":00.")[0];

  return timeConvert;
};

export const TimeRecurConvertor = (time) => {
  return new Date(time).toISOString().split("T")[0];
};
