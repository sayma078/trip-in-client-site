import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import serviceData from '../../data/services.json';

const Details = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(serviceData)
    },[])
    const singleData =data.find((service) => parseInt(service.id)=== parseInt(id))
    return (
        <div>
             <div>
        <h1>Details</h1>
        <div className="mt-4">   
        <img src={singleData?.img} alt="" /> 
        <div className="d-flex justify-content-center mt-5 mb-2 ">
                <h3><i className="fas text-warning fa-dollar-sign"></i> {singleData?.cost}</h3>
                <h3 className="ms-4 ">
                <i className="fas text-warning  fa-calendar-alt"></i> {singleData?.time}</h3>
            </div> 
        <h4 className="text-info">{singleData?.name}</h4>
        <p>{singleData?.description}</p>
        </div>
        </div>
        </div>
    );
};

export default Details;