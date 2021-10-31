import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const {service} = props;
    const{_id, name, img, description}= service;
    return (
        <div className="col-md-6 g-3  ">
        <div className="card ">
          <img src={img} className="card-img-top p-3 image" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">{name}</h5>
            <p className="card-text">{description.slice(0,110)}...</p>
            <br />
            <Nav.Link as={Link} to={`/details/${_id}`}><button className="btn btn-warning">Book now</button></Nav.Link>
          </div>
        </div>
      </div>
    );
};

export default Service;