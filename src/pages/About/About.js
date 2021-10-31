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
            
          <div >
            <div>
            <img src={person1} className="card-img-top rounded-circle " alt="..." />
            </div>
            <div className="card-body">
              <h3>Lina Watson </h3>
              <p className="card-text">
              Last month, I had the opportunity to go on a 4-day adventure with Hayley Andersen & Kyle Hunter. Along with a group of 16 other travellers, we visited Australia’s Red Centre. We’ve seen incredible sunrises and sunsets in Uluru, Kings Canyon and the West MacDonnell Ranges before ending our trip in Alice Spring .
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 g-3">
          <div >
            <img src={person2} className="card-img-top rounded-circle " alt="..." />
            <div className="card-body">
              <h3>  Allen Fischer</h3>
              <p className="card-text">
              My love story with this was definitely not love at first sight. It took a little while for me to start enjoying it, but ultimately I gave myself some time to discover what this beautiful city has to offer. Hint: there is a lot! From its vibrant cafes to its street art, museums, local bars, thrift shops and secluded beaches.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 g-3">
          <div >
            <img src={person3} className="card-img-top rounded-circle " alt="..." />
            <div className="card-body">
              <h3>Tisa Palmer</h3>
              <p className="card-text">
                {" "}
                Earlier in March, my flatmate Raquel and myself decided to go to Jervis Bay for the weekend. This little piece of paradise is a 3-hour drive from Sydney and is part of the region of Shoalhaven. It is home to the thinnest and whitest sand I have seen in my life, it isn’t a joke!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;