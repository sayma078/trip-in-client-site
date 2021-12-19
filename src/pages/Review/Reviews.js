import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('https://glacial-tor-19985.herokuapp.com/review')
          .then(res => res.json())
          .then(data => setUserReview(data))
    })
    return (
        <div className="mt-5 container">
        <h2 className="text-warning text-center fst-italic fw-bold m-5 ">Users Review</h2>
        <div className="row">
             {
                  userReview.map((review) => (
                  <Review key={review._id} review={review}>
                  </Review>))
              }
        </div>
      </div>
    );
};

export default Reviews;