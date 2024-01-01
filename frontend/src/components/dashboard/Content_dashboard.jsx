import React from "react";
import HeaderCard from "./Card";
import SemiCollections from "./SemiCollections";

export default function Content_dashboard() {
  return (
    <>
      <div className="row">
        <HeaderCard
          class="card-header-warning"
          img="/imgs/Group 1381.png"
          name="Cars"
        ></HeaderCard>
        <HeaderCard
          class="card-header-success"
          img="/imgs/Group 1382.png"
          name="Offices"
        ></HeaderCard>
        <HeaderCard
          class="card-header-danger"
          img="/imgs/Group 1324.png"
          name="Admins"
        ></HeaderCard>
        <HeaderCard
          class="card-header-info"
          img="/imgs/Group 1383.png"
          name="Managers"
        ></HeaderCard>
      </div>

      <div className="row">
        <SemiCollections
          size="col-lg-8 "
          headerName="Customers"
          data={["Id", "Name", "Car Rented", "Address"]}
        ></SemiCollections>
        <div className="col-lg-4 col-md-12">
          <div className="custom-account-card card">
            <div className="card-header card-header-warning custom-card-height">
              <div className="float-left">
                <a>
                  <span className="material-icons custom-material-icon">
                    person{" "}
                  </span>
                  Total Revenu
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="progress custom-progress mx-auto" data-value="80">
                <span className="progress-left">
                  <span
                    className="
                      progress-bar
                      account-progress-bar
                      border-info
                      bg-gray-white
                    "
                  ></span>
                </span>
                <span className="progress-right">
                  <span
                    className="
                      progress-bar
                      account-progress-bar
                      border-info
                      bg-gray-white
                    "
                  ></span>
                </span>
                <div
                  className="
                    progress-value
                    w-100
                    h-100
                    rounded-circle
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div className="h5 font-weight-bold text-center">
                    6565.00
                    <br />
                    Total
                  </div>
                </div>
              </div>
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="p mb-0 bullet">Current Month Revenu</div>
                  <span className="small text-gray">0</span>
                </div>
                <div className="col-6">
                  <div className="p mb-0 bullet">Current Year Revenu</div>
                  <span className="small text-gray">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <SemiCollections
          size="col-xlg-8 "
          headerName="Reservations"
          data={["Customer name", "Model", "start date", "Cost"]}
        ></SemiCollections>
      </div>
    </>
  );
}
