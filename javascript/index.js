function UpdateCityTime(cityID, timezone) {
  let cityElement = document.querySelector(cityID);
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");
  let cityTime = moment().tz(timezone);

  cityDateElement.innerHTML = cityTime.format("ddd Do MMM, YYYY");
  cityTimeElement.innerHTML = `${cityTime.format(
    "HH:mm[<small>]:ss A[<small>]"
  )}`;
}

function UpdateInitialTimeAndSetInterval(cityID, timezone) {
  UpdateCityTime(cityID, timezone);
  setInterval(UpdateCityTime, 1000, cityID, timezone);
}

UpdateInitialTimeAndSetInterval("#halifax", "America/Halifax");
UpdateInitialTimeAndSetInterval("#los-angeles", "America/Los_Angeles");
UpdateInitialTimeAndSetInterval("#dortmund", "Europe/Berlin");
UpdateInitialTimeAndSetInterval("#mexico-city", "America/Mexico_City");
