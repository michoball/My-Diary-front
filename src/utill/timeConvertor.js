const TimeConvertor = (time) => {
  const timeConvert = new Date(time).toISOString().split("T");

  const convertedTime = {
    day: timeConvert[0],
    time: timeConvert[1].slice(0, 5),
  };

  return convertedTime;
};

export default TimeConvertor;
