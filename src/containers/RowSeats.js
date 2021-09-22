import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class RowSeats extends Component {
  renderRowSeats = () => {
    const { seatsList } = this.props;
    return seatsList.map((rowseats, index) => {
      let numberSeats = rowseats.danhSachGhe.map((seats, index) => {
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
      });

      if (index === 0) {
        return rowseats.danhSachGhe.map((row) => {
          return <button className="rowNumber">{row.soGhe}</button>;
        });
      } else {
        return (
          <div key={index}>
            {rowseats.hang}
            {numberSeats}
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div
        className="text-light text-left mt-3"
        style={{ fontSize: "35px", marginLeft: "62px" }}
      >
        {this.renderRowSeats()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatsList: state.userReducer.seatsList,
    seatsListHang: state.userReducer.seatsList.hang,
  };
};

export default connect(mapStateToProps, null)(RowSeats);
