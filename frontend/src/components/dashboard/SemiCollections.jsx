import React from "react";

export default function SemiCollections(props) {
  return (
    <>
      <div class={"col-md-12 " + props.size}>
        <div class="card">
          <div class="card-header card-header-primary custom-card-height">
            <div class="float-left">
              <a>
                <span class="material-icons custom-material-icon">person </span>
                <span>{props.headerName}</span>
              </a>
            </div>
            <div class="text-right">
              <h4 class="card-title">{"Total " + props.headerName}</h4>
              <p class="card-category">0</p>
            </div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead class="text-warning">
                <th>{props.data[0]}</th>
                <th>{props.data[1]}</th>
                <th>{props.data[2]}</th>
                <th>{props.data[3]}</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dakota Rice</td>
                  <td>0</td>
                  <td>444, South Paikpara, Mirpur, Dhaka</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakota Rice</td>
                  <td>+880 00000 0000000</td>
                  <td>444, South Paikpara, Mirpur, Dhaka</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
