import React, { Component } from "react";

export default class SeatsDetail extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="BookedSeats"></button>
          <span className="text-light ml-2">Booked Seats</span>
          <br />
          <button className="CurrentSelection"></button>
          <span className="text-light ml-2">Current Selection</span>
          <br />
          <button className="seat"></button>
          <span className="text-light ml-2">Available Seats</span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light ">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-warning ">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
              <tr className="text-warning ">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
