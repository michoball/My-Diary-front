const TimeConvertor = (time) => {
  const timeConvert = new Date(time).toISOString().split(":00.")[0];

  return timeConvert;
};

export default TimeConvertor;
