import React, { Component } from "react";
import { connect } from "react-redux";

class SeatsDetail extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="BookedSeats"></button>
          <span className="text-light ml-2">Booked Seats</span>
          <br />
          <button className="CurrentSelection"></button>
          <span className="text-light ml-2">Current Selection</span>
          <br />
          <button className="seat"></button>
          <span className="text-light ml-2">Available Seats</span>
        </div>

        <div className="mt-3">
          <table className="table" border="2">
            <thead>
              <tr className="text-light text-center ">
                <th>Seat Number</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody className="text-warning text-center">
              {this.props.seatSelected.map((select, index) => {
                return (
                  <tr key={index}>
                    <td>{select.soGhe}</td>
                    <td>{select.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.Cancel(select.seats);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning text-center">
                <td>
                  Total tickets:
                  <span
                    className="text-danger ml-2"
                    style={{ fontSize: "20px" }}
                  >
                    {this.props.seatSelected.reduce((count) => {
                      return (count += 1);
                    }, 0)}{" "}
                  </span>
                </td>
                <td>Total Price</td>
                <td className="text-danger" style={{ fontSize: "20px" }}>
                  {this.props.seatSelected
                    .reduce((totalPrice, select, index) => {
                      return (totalPrice += select.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatSelected: state.userReducer.seatSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Cancel: (seats) => {
      dispatch({
        type: "CANCEL_SEAT",
        seats,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatsDetail);
