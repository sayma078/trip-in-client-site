import React from 'react';
import blog1 from "../../../images/blog/blog1.png";
import blog2 from "../../../images/blog/blog2.png";
import blog3 from "../../../images/blog/blog3.png";
import blog4 from "../../../images/blog/blog4.png";
import blog5 from "../../../images/blog/blog5.png";
import blog6 from "../../../images/blog/blog6.png";

const Blogs = () => {
    return (
        <div className="container ">
        <div className="row mt-5  ">
        <h2 className="mb-3 mt-5 text-warning">Blog Full With</h2>
              
          <div className="col-md-4 g-3">
              
            <div className="card ">
                <img src={blog1} className="card-img-top w-100" alt="..." />
              <div className="card-body">
               <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Dina Jems</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                Last month, I had the opportunity to go on a 4-day adventure with Hayley Andersen & Kyle Hunter. Along with a group of 16 other travellers, we visited Australia’s Red Centre. We’ve seen incredible sunrises and sunsets in Uluru, Kings Canyon and the West MacDonnell Ranges before ending our trip in Alice Spring where we visited the kangaroo sanctuary.
                </p>
              </div>
                
            </div>




          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog2} className="card-img-top" alt="..." />
              <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Albert Anbi</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                Find the best things to do in Italy. Where to see Renaissance art. What beaches to visit. Which mountain ranges are best for hiking. What cities to see. And when to go. Check out our video. Then see 24 of the best things to do in Italy. The information in this article is taken from The Rough Guide to Italy your essential guide for visiting Italy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog3} className="card-img-top" alt="..." />
              <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Max Din</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                  {" "}
                  

                  Roman ruins are fascinating. But what's worth seeing? Here are five best Roman ruins. Fit them into your Rome trip. They're all worth a visit. The information in this article is taken from The Rough Guide to Italy your essential guide for visiting Italy.You will really love this tour!!!.Both Complete Italy or Italy Itineraries offer inspiration.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog4} className="card-img-top" alt="..." />
              <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Watnil Cook</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                  {" "}
                  Earlier in March, my flatmate Raquel and myself decided to go to Jervis Bay for the weekend. This little piece of paradise is a 3-hour drive from Sydney and is part of the region of Shoalhaven. It is home to the thinnest and whitest sand I have seen in my life, it isn’t a joke!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog5} className="card-img-top" alt="..." />
              <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Cameron Ca</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                  {" "}
                  My love story with this was definitely not love at first sight. It took a little while for me to start enjoying it, but ultimately I gave myself some time to discover what this beautiful city has to offer. Hint: there is a lot! From its vibrant cafes to its street art, museums, local bars, thrift shops and secluded beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card">
              <img src={blog6} className="card-img-top" alt="..." />
              <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
               <div className="me-5">
                 <h4 className="text-warning">Lomin Vume</h4>
               </div>
               <div>
                 <h5 className="text-warning" ><i className="fas fa-comment-dots "></i> (3)comments</h5>
               </div>
               </div>
                <p className="card-text">
                  {" "}
                  Come with me on a road trip along the coast of Tropical North Queensland. Discover the rainforest of Port Douglas, the secret islands and stunning waterfalls around Cairns. Spot some wildlife on Magnetic Island, before heading south to the dreamy Whitsundays for some fun in the sun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;