import React from "react";
import { useState, useEffect } from "react";
import Checkout from "../pages/Checkout";
export default function Cars_Cell(data) {
  console.log({ data });
  return (
    <>
      <>
        <div class="featured-car-card">
          <figure class="card-banner">
            <img
              src={data.image_url}
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
                <a href="#">{data.model}</a>
              </h3>

              <data class="year" value="2021">
                {data.year}
              </data>
            </div>

            <ul class="card-list">
              <li class="card-list-item">
                <ion-icon name="people-outline"></ion-icon>

                <span class="card-item-text">{data.seatAmount} People</span>
              </li>

              <li class="card-list-item">
                <ion-icon name="color-fill-outline"></ion-icon>

                <span class="card-item-text">{data.color}</span>
              </li>

              <li class="card-list-item">
                <ion-icon name="keypad-outline"></ion-icon>

                <span class="card-item-text">{data.plateId}</span>
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
              <button
                onClick={() => data.setCheckout(!data.checkout)}
                class="btn"
              >
                Rent now
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
