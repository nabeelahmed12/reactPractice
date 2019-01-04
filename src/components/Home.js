import React from "react";

export class Home extends React.Component {
  constructor(props){
super();
this.state = {
  age : props.InitialAge,
  status: 0
};
}
  OnMakeOlder(){
//this.age += 3;
 this.setState({
   age: this.state.age + 3
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
    <hr/>
    <button onClick={() => this.OnMakeOlder()} className="btn btn-primary"> Make me older!</button>       
      </div>
    );
  }
}

// Home.propTypes = {
// //name: React.PropTypes.string,
//  age: React.PropTypes.number,
//  user: React.PropTypes.object,
//  //children: React.PropTypes.elements.isrequired
// };
