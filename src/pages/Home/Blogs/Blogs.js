import React from 'react';
import blog1 from "../../../images/blog/blog1.png";
import blog2 from "../../../images/blog/blog2.png";
import blog3 from "../../../images/blog/blog3.png";
import blog4 from "../../../images/blog/blog4.png";
import blog5 from "../../../images/blog/blog5.png";
import blog6 from "../../../images/blog/blog6.png";

const Blogs = () => {
    return (
        <div className="container">
        <div className="row mt-5 ">
        <h2 className="mb-3 mt-5 text-warning">Blog Full With</h2>
              
          <div className="col-md-4 g-3">
              
            <div className="card ">
                <img src={blog1} className="card-img-top w-100" alt="..." />
              <div className="card-body">
                <h3>Dental Surgeon Maria Welsh </h3>
                <p className="card-text">
                  Dr. Maria Welsh is dedicated to providing her patients with the
                  most beautiful smile together with the best dental protection
                  available nowadays. Check-ups are a major part of the job and
                  are important for patients keeping on top of their oral care.
                </p>
              </div>
                
            </div>




          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3> Dr. Allen Fischer</h3>
                <p className="card-text">
                  Dr. Allen Fischer is dedicated to providing her patients with
                  the most beautiful smile together with the best dental
                  protection available nowadays. Check-ups are a major part of the
                  job and are important for patients keeping on top of their oral
                  care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Dr. Lisa Palmer</h3>
                <p className="card-text">
                  {" "}
                  Dr. Lisa Palmer is dedicated to providing her patients with the
                  most beautiful smile together with the best dental protection
                  available nowadays. Check-ups are a major part of the job and
                  are important for patients keeping on top of their oral care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Dr. Lisa Palmer</h3>
                <p className="card-text">
                  {" "}
                  Dr. Lisa Palmer is dedicated to providing her patients with the
                  most beautiful smile together with the best dental protection
                  available nowadays. Check-ups are a major part of the job and
                  are important for patients keeping on top of their oral care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Dr. Lisa Palmer</h3>
                <p className="card-text">
                  {" "}
                  Dr. Lisa Palmer is dedicated to providing her patients with the
                  most beautiful smile together with the best dental protection
                  available nowadays. Check-ups are a major part of the job and
                  are important for patients keeping on top of their oral care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Dr. Lisa Palmer</h3>
                <p className="card-text">
                  {" "}
                  Dr. Lisa Palmer is dedicated to providing her patients with the
                  most beautiful smile together with the best dental protection
                  available nowadays. Check-ups are a major part of the job and
                  are important for patients keeping on top of their oral care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;