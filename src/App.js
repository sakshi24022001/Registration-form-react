import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      user: {
        firstname: "",
        lastname: "",
        address: "",
        number: "",
        hobby: "",
        gender: "",
        city: ""
      }
    };
  }
  handleClick(e) {
    console.log("ALL FROM DATA", this.state.user);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleChange = (e) => {
    console.log("this is:", e, e.target.name, e.target.value);

    this.setState(
      (state) => ({
        ...state,
        user: {
          ...state.user,
          [e.target.name]: e.target.value
        }
      }),
      () => console.log("THIS", this.state)
    );
  };
  render() {
    return (
      <div className="App">
        <form>
          <div>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              placeholder="Name"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <input
              type="text"
              id="latsname"
              name="lastname"
              required
              placeholder="Lastname"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder="Address"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <input
              type="text"
              id="number"
              name="number"
              required
              placeholder="Number"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <h5>Hobby</h5>
            Dance:
            <input type="checkbox" id="hobby" valur="dance" name="hobby" />
            Music :
            <input
              type="checkbox"
              id="hobby"
              name="hobby"
              value="music"
              onChange={(e) => this.handleChange(e)}
            />
            Painting :
            <input
              type="checkbox"
              id="hobby"
              name="hobby"
              value="painting"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <h3>Gender</h3>
            Male{" "}
            <input
              type="radio"
              id="gender"
              name="gender"
              value="Male"
              onChange={(e) => this.handleChange(e)}
            />
            Female{" "}
            <input
              type="radio"
              id="gender"
              name="gender"
              value="Female"
              onChange={(e) => this.handleChange(e)}
            />
            Other{" "}
            <input
              type="radio"
              id="gender"
              name="gender"
              value="other"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            City :{" "}
            <select
              id="city"
              name="city"
              onChange={(e) => this.handleChange(e)}
            >
              <option
                id="city"
                name="city"
                value="Indore"
                onChange={(e) => this.handleChange(e)}
              >
                Indore
              </option>
              <option
                id="city"
                name="city"
                value="Ahmdabad"
                onChange={(e) => this.handleChange(e)}
              >
                Ahmdabad
              </option>
              <option
                id="city"
                name="city"
                value="Delhi"
                onChange={(e) => this.handleChange(e)}
              >
                Delhi
              </option>
            </select>
            <br />
            <br />
            <button onClick={(e) => this.handleClick(e)}>Submit</button>
            {this.state.isToggleOn ? JSON.stringify(this.state.user) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
