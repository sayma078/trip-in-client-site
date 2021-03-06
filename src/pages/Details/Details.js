import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://glacial-tor-19985.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name,img, cost, time, description} = details;
    const bookingData = { ...data, name,img, cost, time, description,bookingStatus :"pending" };
    console.log(data);
    axios.post("https://glacial-tor-19985.herokuapp.com/booking", bookingData).then((res) => {
      if (res.data.insertedId) {
        alert(`booking successfully. Review ${history.push("/review")}`);
      }
    });
  };
  return (
    <div className=" container">
      <div className="row  mt-5">
      <div className="col-md-8 ">
        <div className="card ">
          <div className="mt-4">
            <img className="img-fluid" src={details?.img} alt="" />
            <div className="d-flex justify-content-center mt-5 mb-2 ">
              <h3>
                <i className="fas text-warning fa-dollar-sign"></i> {details?.cost}
                /Per Person
              </h3>
              <h3 className="ms-4 ">
                <i className="fas text-warning  fa-calendar-alt"></i>{" "}
                {details?.time}Days/6 night
              </h3>
            </div>
            <h4 className="text-info">{details?.name}</h4>
            <p>{details?.description}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h2>Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              defaultValue={loginUser.email}
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-2">
            <input
              defaultValue={loginUser.displayName}
              {...register("userName", { required: true })}
            />
          </div>
          <div className="mb-2">
            <input {...register("address", { required: true })} placeholder="Address" />
          </div>
          <div className="mb-2">
            <input
              type="number"
              {...register("phoneNumber", { required: true })} placeholder="Phone Number"
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="bg-warning" type="submit" value="Book Now" />
        </form>
      </div>
      </div>
    </div>
  );
};

export default Details;
