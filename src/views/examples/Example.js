import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Childex from "./Childex";
import "../App.scss";
class Example extends React.Component {
  state = {
    fname: "",
    lname: "",
    jobs: [
      { job_id: "1", job_name: "project manager", salary: 1000 },
      { job_id: "2", job_name: "developer", salary: 500 },
      { job_id: "3", job_name: "tester", salary: 200 },
    ],
  };

  handleOnChangeFname = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };

  handleOnChangeLname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert(
      `first name : ${this.state.fname} and last name: ${this.state.lname}`
    );
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.fname}
            onChange={(event) => this.handleOnChangeFname(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lname}
            onChange={(event) => this.handleOnChangeLname(event)}
          />
          <br />
          <input
            name="App-button"
            type="submit"
            value="Submit"
            onClick={(event) => this.handleClick(event)}
          />
        </form>

        <Childex jobs={this.state.jobs} />
      </>
    );
  }
}

export default Example;
