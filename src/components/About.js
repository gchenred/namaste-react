import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About US</h1>
//       <h2>This is Namaste React Web series</h2>
//       {/* <User /> */}
//       <UserClass />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  componentWillUnmount() {
    console.log("Parent ComponentUnMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About US</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass userinfo={{ username: "Govardhan Reddy", id: "16" }} />
        {/* <UserClass userinfo={{ username: "Shruthi Reddy", id: "07" }} /> */}
      </div>
    );
  }
}

export default About;
