
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

export const getTime = (timePeriod, time) => {
	let date, month, year, hours, minutes, dayTime;
	if (time.getHours() > 12) {
		date = time.getDate();
		month = months[time.getMonth()];
		year = time.getFullYear();
		hours = time.getHours() - 12;
		minutes =
      time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
		dayTime = "PM";
		if (timePeriod === "1y") return `${date}/${month}/${year}`;
  if (timePeriod === "3m") return `${date}/${month}/${year}`;
		if (timePeriod === "3y") return `${month}/${year}`;
  if (timePeriod === "5y") return `${month}/${year}`;
		if (timePeriod === "3h") return `${hours}:${minutes}${dayTime}`;
		if (timePeriod === "24h")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
		if (timePeriod === "30d")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
		if (timePeriod === "7d")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
	} else {
		date = time.getDate();
		month = months[time.getMonth()];
		year = time.getFullYear();
		hours = time.getHours();
		minutes =
      time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
		dayTime = "AM";
		if (timePeriod === "1y") return `${date}/${month}/${year}`;
  if (timePeriod === "3m") return `${date}/${month}/${year}`;
		if (timePeriod === "3y") return `${month}/${year}`;
  if (timePeriod === "5y") return `${month}/${year}`;
		if (timePeriod === "3h") return `${hours}:${minutes}${dayTime}`;
		if (timePeriod === "24h")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
		if (timePeriod === "30d")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
		if (timePeriod === "7d")
			return `${date}/${month}(${hours}:${minutes}${dayTime})`;
	}
};