import React from "react";
import { useState } from "react";
import "../../css/custom.css";
import "../../css/materil.css";
import "../../css/responsive.css";
import "../../css/fontawesome-all.min.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Dashboard_Login from "./Dashboard_Login";
import { Routes, Route } from "react-router-dom";

export default function DashBoard() {
  //select dashboard
  const [shownPage, setShownPage] = useState(0);
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route
            Component={
              <Dashboard_Login setShownPage={setShownPage}></Dashboard_Login>
            }
            
          ></Route>
        </Routes>
        {shownPage == 5 ? (
          <div></div>
        ) : (
          <>
            <Sidebar setShownPage={setShownPage}></Sidebar>
            <div className="main-panel">
              <Navbar></Navbar>
              <Content shownPage={shownPage}></Content>
            </div>
          </>
        )}
      </div>
    </>
  );
}
