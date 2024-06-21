import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Childex extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({ showJobs: !this.state.showJobs });
  };
  render() {
    let { jobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {jobs.map((item, index) => {
                return (
                  <div>
                    {item.job_name} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Childex;
