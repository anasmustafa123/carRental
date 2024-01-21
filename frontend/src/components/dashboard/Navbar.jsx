import React from "react";
import { useAuth } from "../../contextss/AuthContext";
import { useNavigate } from "react-router-dom";
export default function () {
  const { adminLogout } = useAuth();
  return (
    <>
      <nav
        className="
    navbar navbar-expand-lg navbar-transparent navbar-absolute
    fixed-top
  "
      >
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="javascript:;">
              Dashboard
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse">
            <form className="navbar-form">
              <div className="input-group custom-input no-border">
                <input
                  type="text"
                  value=""
                  className="form-control"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="btn btn-danger btn-round btn-just-icon"
                >
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>{" "}
                </a>
              </li>
              <span
                style={{ color: "red", cursor: "pointer" }}
                class="material-symbols-outlined"
                onClick={async () => {
                  await adminLogout();
                  //navigate("/admin/login");
                }}
              >
                logout
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
