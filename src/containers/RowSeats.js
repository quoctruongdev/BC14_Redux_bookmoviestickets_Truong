import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class RowSeats extends Component {
  renderRowSeats = () => {
    const { seatsList } = this.props;

    return seatsList.map((rowseats, index) => {
      return (
        <div
          key={index}
          className="text-light text-left mt-2"
          style={{ fontSize: "30px", marginLeft: "95px" }}
        >
          {rowseats.hang}
          {rowseats.danhSachGhe.map((seats) => {
            let cssbookedSeat = "";
            let disabled = false;

            if (seats.daDat) {
              cssbookedSeat = "BookedSeats";
              disabled = true;
            }
            return (
              <button
                disabled={disabled}
                className={`seat ${cssbookedSeat}`}
                key={index}
              >
                {seats.soGhe}
              </button>
            );
          })}
        </div>
      );
    });
  };

  render() {
    return <>{this.renderRowSeats()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    seatsList: state.userReducer.seatsList,
    seatsListHang: state.userReducer.seatsList.hang,
  };
};

export default connect(mapStateToProps, null)(RowSeats);
