import React from "react";
import { useState } from "react";

export default function Sidebar(props) {
  return (
    <>
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <a href="./index.html" className="simple-text logo-normal">
            <img src="/imgs/Group 2.svg" alt="logo" />
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item" onClick={()=>props.setShownPage(0)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/ic_view_quilt_24px.png" />
                Dashboard
              </a>
            </li>
            <li className="nav-item" onClick={()=>props.setShownPage(1)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/Group 1380.png" />
                Customers
              </a>
            </li>
            <li className="nav-item" onClick={()=>props.setShownPage(2)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/Group 1381.png" />
                Cars
              </a>
            </li>
            <li className="nav-item" onClick={()=>props.setShownPage(3)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/Group 1385.png" />
                Reservations
              </a>
            </li>
            <li className="nav-item" onClick={()=>props.setShownPage(4)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/Group 1380.png" />
                Profile
              </a>
            </li>

            <li className="nav-item" onClick={()=>props.setShownPage(5)}>
              <a className="nav-link">
                <img className="mr-2" src="/imgs/Group 1382.png" />
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
