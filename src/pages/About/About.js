import React from 'react';
import person1 from "../../images/about/person1.jpg"
import person2 from "../../images/about/person2.jpg";
import person3 from "../../images/about/person3.jpg";
const About = () => {
    return (
        <div className="container">
      <div className="row mt-5 ">
      <h4 className="mb-5 text-warning">Our Traveller Say</h4>
            <h2 >What Oue Traveller Say About Us</h2>
        <div className="col-md-4 g-3">
            
          <div className="card">
            <img src={person1} className="card-img-top" alt="..." />
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
            <img src={person2} className="card-img-top" alt="..." />
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
            <img src={person3} className="card-img-top" alt="..." />
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

export default About;