import * as React from "react";

export default function Nav() {
  return (
    <React.Fragment>
      <div className="menu_bar">
        <h1 id="title"> bauhaus</h1>
        <div className="container">
          <nav>
            <ul>
              <li>Architektur</li>
              <li>Keramik Werkstatt</li>
              <li>Möbelwerkstatt</li>
              <li>Wandmalerei</li>
              {/*  <li>
                <a href="/weberei">Weberei</a>
              </li> */}
            </ul>
          </nav>
          {/*    <div>Architektur</div>
          <div>Keramik Werkstatt</div>
          <div>Möbelwerkstatt</div>
          <div>Wandmalerei</div>
          <div>Weberei</div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
