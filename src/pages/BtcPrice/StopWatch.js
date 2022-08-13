import React, { Component } from "react";
import { Button } from "reactstrap";

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 36000,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }


  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }
  onclick(type) {
    this.setState((prevState) => {
      return {
        seconds:
          type == "sub" ? prevState.seconds - 3600 : prevState.seconds + 3600,
      };
    });
  }
 
  onclickMinute(type) {
    this.setState((prevState) => {
      return {
        seconds:
          type == "sub" ? prevState.seconds - 61.71 : prevState.seconds + 61.71,
      };
    });
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer()
  }


  render() {
    return (
      <div className="d-flex align-items-center justify-content-center  pt-5 pb-5">
        <i class="fas fa-history px-2" style={{ fontSize: "1.5rem" }}></i>
        <label className="font-size-20 font-weight-500 text-muted px-4">
          h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}
        </label>

        <Button
          className="btn btn-warning font-weight-500 font-size-18"
          onClick={this.onclick.bind(this, "add")}
        >
          {" "}
          increase the hour{" "}
        </Button>
        <div className="mx-2">
          <Button
            className="btn btn-danger font-weight-500 font-size-18"
            onClick={this.onclick.bind(this, "sub")}
          >
            {" "}
            decrease the hour
          </Button>
        </div>
        <Button
          className="btn btn-primary font-weight-500 font-size-18"
          onClick={this.onclickMinute.bind(this, "add")}
        >
          {" "}
          increase the minute{" "}
        </Button>
        <div className="mx-2">
          <Button
            className="btn btn-content font-weight-500 font-size-18"
            onClick={this.onclickMinute.bind(this, "sub")}
          >
            {" "}
            decrease the minute
          </Button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
