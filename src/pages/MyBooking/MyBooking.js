import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyBooking = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://glacial-tor-19985.herokuapp.com/orderEmail?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  console.log(orderList);
  return (
    <div>
      <h2>My Booking: {orderList.length}</h2>
      {orderList.map((booking) => (
        <div className=" g-3 container">
          <div className=" mt-5  ">
            <div className="col-md-4 g-3">
              <div className="card blog">
                <img
                  src={booking.img}
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="text-warning"> {booking.name}</h4>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Cost:${booking.cost}</h3>
                    <h3>Days: {booking.time}days</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
