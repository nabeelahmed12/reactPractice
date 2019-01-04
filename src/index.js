import React from "react";
import { render } from "react-dom";
//import './index.css';
//import App from './App';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
// import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
class App extends React.Component {
  onGreet() {
    alert("hello");
  }

  constructor() {
    super();
    this.state = {
      homelink: "Home"
    };
  }
  onChangeLinkName(newName) {
    this.setState({
      homelink: newName
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 ">
            <Header homelink={this.state.homelink} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 ">
            <Home
              name={"Nabeel"}
              InitialAge={23}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homelink}
            />
          </div>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
