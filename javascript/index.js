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

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2 class="destination">${cityTimeZone}</h2>
            <div class="date">${cityTime.format("ddd Do MMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm")}<small>${cityTime.format(
    ":ss A"
  )}<small></div>
          </div>
          `;
}
