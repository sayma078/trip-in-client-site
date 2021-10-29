import React, { useEffect, useState } from "react";
import servicesData from "../../../data/services.json";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(servicesData);
  }, []);
  return (
    <div>
      <h2>our services</h2>
     <div className="container">
     <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Services;
