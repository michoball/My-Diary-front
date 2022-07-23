const TimeConvertor = (time) => {
  const timeConvert = new Date(time).toISOString().split("T");
  console.log(timeConvert);
  const convertedTime = {
    day: timeConvert[0],
    time: timeConvert[1].slice(0, 5),
  };
  console.log(convertedTime);
  return convertedTime;
};

export default TimeConvertor;
