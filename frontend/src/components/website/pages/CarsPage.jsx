import React from "react";
import Cars_Cell from "../components/Cars_Cell";
import { useState, useEffect } from "react";
import Checkout from "./Checkout";
export default function CarsPage(props) {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout && <Checkout setCheckout={setCheckout} checkout={checkout}></Checkout>}
      {!checkout && (
        <section class="section featured-car" id="featured-car">
          <div class="container">
            <div class="title-wrapper">
              <h2 class="h2 section-title">Featured cars</h2>

              <a href="#" class="featured-car-link">
                <span>View more</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>

            <ul class="featured-car-list">
              {props.cars.map((car, i) => (
                <li key={i}>
                  <Cars_Cell
                    checkout={checkout}
                    setCheckout={setCheckout}
                    seatAmount={car.seatAmount}
                    model={car.model}
                    color={car.color}
                    year={car.year}
                    image_url={car.image_url}
                    carStatus={car.carStatus}
                    plateId={car.plateId}
                  ></Cars_Cell>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
