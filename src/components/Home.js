import React from "react";

export class Home extends React.Component {
  render() {
    //   let content="";
    // if(true){
    //   content = <p>hello</p>
    //}
    var text = "something";
    console.log(this.props);
    return (
      <div>
        <p>in a new component</p>
        <p>{text}</p>
        <p>
          your name is {this.props.name},your age is {this.props.age}
        </p>
        <p>User Object => NAME: {this.props.user.name}</p>
        <div>
          <h4>hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby,i) => (
              <li key={i}> {hobby} </li>
            ))}
          </ul>
        </div>
        <hr/>
        {this.props.children}
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