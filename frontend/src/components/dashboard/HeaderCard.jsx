import React from "react";

export default function HeaderCard(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="custom-icon-card card card-stats">
        <div className={"card-header card-header-warning card-header-icon "+ props.class}>
          <div className="card-icon">
            <img src={props.img} alt="building" />
          </div>
          <p className="card-category">{props.name}</p>
          <h3 className="card-title">{props.count}</h3>
        </div>

        <div className="card-body">
          <div className="stats">
            <div className="progress" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
