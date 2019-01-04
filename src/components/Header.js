import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <button>Home</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
