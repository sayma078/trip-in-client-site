import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://glacial-tor-19985.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-warning ">our services</h2>
     <div className="container">
     <div className="row">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Services;
