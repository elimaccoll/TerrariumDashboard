export default [
  {
    name: "air-temp",
    config: {
      symbol: "it",
      title: "Air Temperature",
      yAxis: "Temperature (°C)",
      unit: "°C",
      minBound: 0,
      maxBound: 40,
      minThreshold: 10,
      maxThreshold: 21,
      data1: [],
      data2: [],
    },
    read: {
      intervals: [1, 3],
      routes: ["internal_air_temp", "external_air_temp"],
    },
  },
  {
    name: "humidity",
    config: {
      symbol: "ih",
      title: "Humidity",
      yAxis: "% Humidity",
      unit: "%",
      minBound: 0,
      maxBound: 100,
      minThreshold: 50,
      maxThreshold: 100,
      data1: [],
      data2: [],
    },
    read: {
      intervals: [1, 3],
      routes: ["internal_humidity", "external_humidity"],
    },
  },
  {
    name: "tds",
    config: {
      symbol: "td",
      title: "TDS",
      yAxis: "TDS (ppm)",
      unit: "ppm",
      minBound: 0,
      maxBound: 1000,
      minThreshold: 0,
      maxThreshold: 100,
      data1: [],
      data2: [],
    },
    read: {
      intervals: [5],
      routes: ["tds"],
    },
  },
  {
    name: "soil-moisture",
    config: {
      symbol: "sm",
      title: "Soil Moisture",
      yAxis: "Soil Moisture (%)",
      unit: "%",
      minBound: 0,
      maxBound: 100,
      minThreshold: 45,
      maxThreshold: 60,
      data1: [],
      data2: [],
    },
    read: {
      intervals: [5],
      routes: ["soil_moisture"],
    },
  },
  {
    name: "water-temp",
    config: {
      symbol: "wt",
      title: "Water Temperature",
      yAxis: "Temperature (°C)",
      unit: "°C",
      minBound: -10,
      maxBound: 40,
      minThreshold: 4,
      maxThreshold: 13,
      data1: [],
      data2: [],
    },
    read: {
      intervals: [3],
      routes: ["water_temp"],
    },
  },
];