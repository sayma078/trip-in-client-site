import React from 'react';
import blog1 from "../../../images/blog/blog1.png";
import blog2 from "../../../images/blog/blog2.png";
import blog3 from "../../../images/blog/blog3.png";
import blog4 from "../../../images/blog/blog4.png";
import blog5 from "../../../images/blog/blog5.png";
import blog6 from "../../../images/blog/blog6.png";
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container ">
        <div className="row mt-5  ">
        <h2 className="mb-3 mt-5 text-warning">Blog Full With</h2>
              
          <div className="col-md-4 g-3">
              
            <div className="card blog">
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
                The city of lights is a big place so when you rock up in Paris, it’s always good to have a little help from the locals. In this article, those locals are the blogging elite on the ground - those in the know who aren’t afraid to share their tips. If you’re heading to Paris, here are the fonts of local knowledge that we’d recommend.
                </p>
              </div>
                
            </div>




          </div>
          <div className="col-md-4 g-3">
            <div className="card blog">
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
            <div className="card blog">
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
            <div className="card blog">
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
                  This eclectic blog is run by ex-New Yorker Yanique who moved to Paris in 2007. She posts everything from cheap-eats and where to shop, but the blog’s USP is undoubtedly the ‘Neighbourhoods’ section - or shall we say ‘arrondissements’ in French. For every neighbourhood in Paris (20 to be precise), she has listed the best places to go in each one. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card blog">
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
                  This is the oldest independent and locally-owned website about Paris (in English). This means one thing: it’s full of wisdom. Created in 1999, this blog remains true to its name, uncovering the city’s secrets and local haunts - but most importantly providing practical advice for tourists. From Eurostar hacks, how to drive in Paris 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 g-3">
            <div className="card blog">
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
                  Lost In Cheeseland offers superbly-written guides to the city from where to stay and what to eat. Find yourself craving ice-cream, Chinese food or even Mexican while you’re in Paris? This local knows where to go, whatever you fancy. The owner of the blog, Lindsey, is an American girl turned Parisian who fell in love with a Frenchman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;