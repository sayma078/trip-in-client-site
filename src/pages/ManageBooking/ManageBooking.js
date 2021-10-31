import React, { useEffect, useState } from 'react';

const ManageBooking = () => {
    const [bookingDetails, setBookingDetails] =useState([]);
    useEffect(()=>{
        fetch('https://glacial-tor-19985.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setBookingDetails(data))
    },[])
    console.log(bookingDetails)
    const handleDelete = (id) => {
      const url = `http://localhost:5000/DeleteBookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("delete successfully", data);
        });
    };
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
              <td>{booking?.bookingStatus}</td>
              <td><button onClick={()=>handleDelete(booking?._id)}>Delete</button></td>
            </tr>
          ))} 
          </tbody>
          </table>
        </div>
    );
};

export default ManageBooking;