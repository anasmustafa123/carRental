import React from "react";
import Content_dashboard from "./Content_dashboard";
import Content_customers from "./Content_customers";
import Content_Cars from "./Content_Cars";
import Content_reservation from "./Content_reservation";
export default function Content(props) {
  return (
    <div className="content">
      <div className="container-fluid">
        {props.shownPage == 0 && <Content_dashboard></Content_dashboard>}
        {props.shownPage == 1 && <Content_customers></Content_customers>}
        {props.shownPage == 2 && <Content_Cars></Content_Cars>}
        {props.shownPage == 3 && <Content_reservation></Content_reservation>}
        {props.shownPage == 3 && <></>}
      </div>
    </div>
  );
}
