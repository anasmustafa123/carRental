import React from "react";

export default function FullCollection(props) {
  console.log({content: props.content})
  return (
    <>
      <div className="col-md-12">
        <div className="card utility-page-content custom-user-info-card">
          <div className="card-header card-header-danger">
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <div className="user-profile-nav">
                    <div className="btn-add-group">
                      <button  type="submit" className="btn btn-white">
                        <span className="material-icons add-icon">add_box</span>
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body custom-user-table-data">
            <div className="table-responsive">
              <table className="table">
                <thead className="text-danger">
                  <tr>
                    <th style={{ width: "17%" }}>{props.data[0]}</th>
                    <th style={{ width: "13%" }}>{props.data[1]}</th>
                    <th style={{ width: "10%" }}>{props.data[2]}</th>
                    <th style={{ width: "8%" }}>{props.data[3]}</th>
                    <th style={{ width: "10%" }}>{props.data[4]}</th>
                    <th style={{ width: "19%" }}>{props.data[5]}</th>
                    <th style={{ width: "19%" }}>{props.data[6]}</th>
                    <th style={{ width: "19%" }}>{props.data[7]}</th>
                    <th style={{ width: "19%" }}>{props.data[8]}</th>
                  </tr>
                </thead>
                <tbody>
                  {props.content.map((value) => (
                    <tr>
                      <td>{value[`${props.data[0]}`]}</td>
                      <td>{value[`${props.data[1]}`]}</td>
                      <td>{value[`${props.data[2]}`]}</td>
                      <td>{value[`${props.data[3]}`]}</td>
                      <td>{value[`${props.data[4]}`]}</td>
                      <td>{value[`${props.data[5]}`]}</td>
                      <td>{value[`${props.data[6]}`]}</td>
                      <td>{value[`${props.data[7]}`]}</td>
                      <td>{value[`${props.data[8]}`]}</td>
                      <td className="text-primary">
                        <div className="action-btn-group float-right d-flex">
                          <button
                            type="button"
                            className="custom-action-btn btn btn-primary mr-2 edit-btn"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="custom-action-btn btn btn-danger delete-btn"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav className="custom-pagination" aria-label="...">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
