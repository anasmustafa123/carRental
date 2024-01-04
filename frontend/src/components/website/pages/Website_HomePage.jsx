import React from "react";
import { useContext, useState } from "react";
import { dashContext } from "../../../contextss/dashboard_context";

export default function Website_HomePage(props) {
  const { getCarsFun, officesLocations } = useContext(dashContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [officeId, setOfficeId] = useState("");
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  return (
    <>
      <section class="section hero" id="home">
        <div class="container">
          <div class="hero-content">
            <h2 class="h1 hero-title">The easy way to takeover a lease</h2>

            <p class="hero-text">Drive every where in the world !</p>
          </div>

          <div class="hero-banner containerBg"></div>

          <form action="" class="hero-form">
            <div class="input-wrapper">
              <label for="input-1" class="input-label">
                Location of the Reservation
              </label>
              <select
                className="input-field"
                name="officeId"
                id="cars"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option value="" disabled>
                  Select location
                </option>
                {officesLocations.map((location, key) => (
                  <option key={key} value="volvo">
                    {location.location}
                  </option>
                ))}
              </select>
            </div>

            <div class="input-wrapper">
              <label for="input-2" class="input-label">
                Start Date of the Reservation
              </label>

              <input
                type="date"
                name="monthly-pay"
                id="input-2"
                class="input-field"
                placeholder="Enter start date"
                value={startDate}
                onChange={handleStartDateChange}
              ></input>
            </div>

            <div class="input-wrapper">
              <label for="input-3" class="input-label">
                End Date of the Reservation
              </label>

              <input
                type="date"
                name="year"
                id="input-3"
                class="input-field"
                placeholder="Enter end date"
                value={endDate}
                onChange={handleEndDateChange}
              ></input>
            </div>

            <button
              type="button"
              class="btn"
              onClick={async () => {
                console.log({ startDate, endDate });
                let cars = await getCarsFun(officeId, startDate, endDate);
                console.log(cars);
                props.setCars(cars);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
