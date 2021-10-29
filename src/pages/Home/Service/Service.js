import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const {service} = props;
    const{id, name, img, description}= service;
    return (
        <div class="col-md-6 g-3  ">
        <div class="card ">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-info">{name}</h5>
            <p class="card-text">{description.slice(0,110)}...</p>
            <br />
            <Nav.Link as={Link} to={`/details/${id}`}><button className="btn btn-warning">Book now</button></Nav.Link>
          </div>
        </div>
      </div>
    );
};

export default Service;