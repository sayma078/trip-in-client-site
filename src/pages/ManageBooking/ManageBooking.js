import React, { useEffect, useState } from 'react';

const ManageBooking = () => {
    const [bookingDetails, setBookingDetails] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res => res.json())
        .then(data => setBookingDetails(data))
    },[])
    console.log(bookingDetails)
    return (
        <div className="container">
           <h2>Manage Booking</h2>
           <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((booking) => (
            <tr>
              <td>{booking?.userName}</td>
              <td>{booking?.phoneNumber}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))} 
          </tbody>
          </table>
        </div>
    );
};

export default ManageBooking;