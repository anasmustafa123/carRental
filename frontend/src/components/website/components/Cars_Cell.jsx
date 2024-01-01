import React from "react";


export default function Cars_Cell() {
  return (
    <>
      <li>
        <div class="featured-car-card">
          <figure class="card-banner">
            <img
              src="/website_imgs/car-1.jpg"
              alt="Toyota RAV4 2021"
              loading="lazy"
              width="440"
              height="300"
              class="w-100"
            ></img>
          </figure>

          <div class="card-content">
            <div class="card-title-wrapper">
              <h3 class="h3 card-title">
                <a href="#">Toyota RAV4</a>
              </h3>

              <data class="year" value="2021">
                2021
              </data>
            </div>

            <ul class="card-list">
              <li class="card-list-item">
                <ion-icon name="people-outline"></ion-icon>

                <span class="card-item-text">4 People</span>
              </li>

              <li class="card-list-item">
                <ion-icon name="flash-outline"></ion-icon>

                <span class="card-item-text">Hybrid</span>
              </li>

              <li class="card-list-item">
                <ion-icon name="speedometer-outline"></ion-icon>

                <span class="card-item-text">6.1km / 1-litre</span>
              </li>

              <li class="card-list-item">
                <ion-icon name="hardware-chip-outline"></ion-icon>

                <span class="card-item-text">Automatic</span>
              </li>
            </ul>

            <div class="card-price-wrapper">
              <p class="card-price">
                <strong>$440</strong> / month
              </p>

              <button class="btn fav-btn" aria-label="Add to favourite list">
                <ion-icon name="heart-outline"></ion-icon>
              </button>

              <button class="btn">Rent now</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
