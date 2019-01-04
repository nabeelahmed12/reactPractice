import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.InitialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
    console.log("Constructor");
  }
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("Component did mount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("component will recieve props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update", nextState, nextProps);
    if(nextState.status === 1){
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  OnMakeOlder() {
    //this.age += 3;
    this.setState({
      age: this.state.age + 3
    });
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    //   let content="";
    // if(true){
    //   content = <p>hello</p>
    //}

    console.log(this.state.age);
    return (
      <div>
        <p>in a new component</p>
        <p>
          your name is {this.props.name},your age is {this.state.age}
        </p>
        <p>Status: {this.state.status}</p>
        <hr />
        <button onClick={() => this.OnMakeOlder()} className="btn btn-primary">
          Make me older!
        </button>
        <hr />
        <button className="btn btn-primary" onClick={this.props.greet}>
          {" "}
          Greet{" "}
        </button>
        <hr />
        <input
          type="text"
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <button
          onClick={this.onChangeLink.bind(this)}
          className="btn btn-primary"
        >
          {" "}
          change in header
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  // //name: React.PropTypes.string,
  //  age: React.PropTypes.number,
  //  user: React.PropTypes.object,
  //  //children: React.PropTypes.elements.isrequired
  //greet: React.PropTypes.func
};
