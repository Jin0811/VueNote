const arr = [
  "05:20",
  "02:43",
  "17:01",
  "12:09",
  "09:51",
  "07:30",
  "12:45",
  "02:49",
  "06:49",
  "10:25",
  "09:28",
  "13:25",
  "08:56",
  "16:26",
  "14:17",
  "19:11",
  "11:16",
  "13:41",
  "11:51",
  "19:55",
  "05:01",
  "14:11",
  "14:34",
  "14:31",
  "26:40",
  "04:04",
  "19:29",
  "12:50",
  "22:10",
  "06:04",
  "26:43",
  "08:41",
  "06:43",
  "02:00",
  "03:13",
  "10:10",
  "16:29",
  "10:59",
  "12:34",
  "04:10",
  "13:09",
  "01:45",
  "03:52",
  "18:01",
  "03:12",
  "16:42",
  "14:41",
  "07:31",
  "04:35",
  "06:30",
  "03:44",
  "14:59",
  "16:06",
  "17:38",
  "21:47",
  "05:51",
  "14:10",
  "22:10",
  "03:04",
  "15:58",
  "19:19",
  "08:58",
  "19:04",
  "16:14",
  "12:13",
  "18:39",
  "23:39",
  "17:01",
  "10:23",
  "08:23",
  "03:08",
];

const getDur = (index) => {
  const temp = index ? arr.slice(0, index) : arr;
  let minuteCount = 0;
  let secondCount = 0;
  temp.forEach((item) => {
    const [minute, second] = item.split(":");
    minuteCount = minuteCount + parseInt(minute);
    secondCount = secondCount + parseInt(second);
  });
  return minuteCount + secondCount / 60;
};

const total = getDur();
const done = getDur(55);
console.log(done, total, done / total);
