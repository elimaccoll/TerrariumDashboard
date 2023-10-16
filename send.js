// Disabled to just demo dashboard

// type represents which type of data these thresholds are for (e.g. humidity, air temp, etc.)
export const sendPlotThresholds = (type, minThresh, maxThresh) => {
  return;

  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    `/threshold_control?type=${type}&min=${minThresh}&max=${maxThresh}`,
    true
  );
  xhttp.send();
};

export const sendDayNightCycle = (cycleLength, cycleStart, isDay) => {
  return;

  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    `/day_night_cycle?length=${cycleLength}&start=${cycleStart}&day=${isDay}`,
    true
  );
  xhttp.send();
};

export const sendLEDBrightness = (brightness) => {
  return;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `/led_control?brightness=${brightness}`, true);
  xhttp.send();
};

export const sendFilterChanged = () => {
  return;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/filter_changed?age=0", true);
  xhttp.send();
};
