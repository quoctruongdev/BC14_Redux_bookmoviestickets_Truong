import React, { Component } from "react";
import "./style.css";
import SeatsDetail from "./seats-detail";
import RowSeats from "./RowSeats";
import { connect } from "react-redux";

class BookMovieStickets extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center ">
                <div
                  style={{ fontSize: "40px" }}
                  className="display-4 text-warning"
                >
                  BOOKING MOVIE STICKETS
                </div>

                <div className="d-flex mt-4 flex-row justify-content-center">
                  <div className="screen mb-4  d-flex flex-row justify-content-center">
                    <p style={{ position: "absolute" }} className="mt-2">
                      SCREEN
                    </p>
                  </div>
                </div>
                <div>
                  <RowSeats />
                </div>
              </div>

              <div className="col-4">
                <div
                  style={{ fontSize: "35px" }}
                  className="text-light text-center text-uppercase"
                >
                  List seats you selected
                </div>
                <SeatsDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatsList: state.userReducer.seatsList,
  };
};
export default connect(mapStateToProps, null)(BookMovieStickets);
