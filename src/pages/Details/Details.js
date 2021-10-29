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
        <img src={singleData?.img} alt="" />  
        <h4>{singleData?.name}</h4>
        <p>{singleData?.description}</p>
        </div>
        </div>
    );
};

export default Details;