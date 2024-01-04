import React from "react";

export default function SemiCollections(props) {
  console.log(props.content);
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
              <p class="card-category">{props.count}</p>
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
                {props.content.slice(0, 2).map((value) => (
                  <tr>
                    <td>{value[`${props.data[0]}`]}</td>
                    <td>{value[`${props.data[1]}`]}</td>
                    <td>{value[`${props.data[2]}`]}</td>
                    <td>{value[`${props.data[3]}`]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
