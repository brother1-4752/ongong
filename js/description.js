let title_db = [
  "얼리버드 1반",
  "얼리버드 2반",
  "점심 1반",
  "올빼미 1반",
  "올빼미 2반",
];
let starttime_db = ["6", "7", "13", "23", "00"];
let startdate_db = ["2020-10-01"];

function to_date2(date_str) {
  var yyyyMMdd = String(date_str);
  var sYear = yyyyMMdd.substring(0, 4);
  var sMonth = yyyyMMdd.substring(5, 7);
  var sDate = yyyyMMdd.substring(8, 10);

  return new Date(Number(sYear), Number(sMonth), Number(sDate));
}

startdate_db.forEach((item) => {
  const startdate = to_date2(item);
  const month = startdate.getMonth();
  const date = startdate.getDate();
  console.log(`${month}/${date}`);
  const program_date = document.querySelector("main>div:nth-child(3)");
  program_date.textContent = `3. 진행 기간 : ${month}/${date} ~ ${month}/${
    date + 29
  }`;
});
