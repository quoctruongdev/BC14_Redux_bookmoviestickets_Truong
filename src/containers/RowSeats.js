import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class RowSeats extends Component {
  renderRowSeats = () => {
    const { seatsList, seatSelected } = this.props;
    return seatsList.map((rowseats, index) => {
      let numberSeats = rowseats.danhSachGhe.map((seats, index) => {
        let cssbookedSeat = "";
        let disabled = false;

        if (seats.daDat) {
          cssbookedSeat = "BookedSeats";
          disabled = true;
        }
        let cssCurrentSelection = "";
        let ListSeatSelected = seatSelected.findIndex(
          (Selected) => Selected.soGhe === seats.soGhe
        );
        if (ListSeatSelected !== -1) {
          cssCurrentSelection = "CurrentSelection";
        }

        return (
          <button
            onClick={() => {
              this.props.bookSeat(seats);
            }}
            disabled={disabled}
            className={`seat ${cssbookedSeat} ${cssCurrentSelection}`}
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
        className="text-warning text-left mt-3"
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
    seatSelected: state.userReducer.seatSelected,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookSeat: (seats) => {
      dispatch({
        type: "SELECT_SEAT",
        seats
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowSeats);
