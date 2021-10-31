import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyBooking = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/orderEmail?email=" + loginUser.email)
        .then((res) => res.json())
        .then((data) => setOrderList(data));
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default MyBooking;