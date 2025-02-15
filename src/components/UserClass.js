import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        id: 0,
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/gchenred");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Child Interval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child ComponentUpdate");
  }
  componentWillUnmount() {
    console.log("Child ComponentUnMount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Child Render");
    const { count } = this.state;
    const { name, id } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{id}</h3>
        <h3>Counter : {count} </h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Counter
        </button>
      </div>
    );
  }
}
export default UserClass;
