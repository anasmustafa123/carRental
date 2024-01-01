import React from "react";

export default function Website_HomePage() {
  return (
    <>
      <section class="section hero" id="home">
        <div class="container">
          <div class="hero-content">
            <h2 class="h1 hero-title">The easy way to takeover a lease</h2>

            <p class="hero-text">Drive every where in the world !</p>
          </div>

          <div class="hero-banner"></div>

          <form action="" class="hero-form">
            <div class="input-wrapper">
              <label for="input-1" class="input-label">
                Car, model, or brand
              </label>

              <input
                type="text"
                name="car-model"
                id="input-1"
                class="input-field"
                placeholder="What car are you looking?"
              ></input>
            </div>

            <div class="input-wrapper">
              <label for="input-2" class="input-label">
                Max. monthly payment
              </label>

              <input
                type="text"
                name="monthly-pay"
                id="input-2"
                class="input-field"
                placeholder="Add an amount in $"
              ></input>
            </div>

            <div class="input-wrapper">
              <label for="input-3" class="input-label">
                Make Year
              </label>

              <input
                type="text"
                name="year"
                id="input-3"
                class="input-field"
                placeholder="Add a minimal make year"
              ></input>
            </div>

            <button type="submit" class="btn">
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
