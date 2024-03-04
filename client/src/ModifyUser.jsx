import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ModifyUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [stream, setStream] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getUser/${id}`)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setStream(result.data.stream);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/updateUser/${id}`, { name, email, stream })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={update}>
          <h2>Update Information</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Stream</label>
            <input
              type="text"
              placeholder="Enter your stream"
              className="form-control"
              value={stream}
              onChange={(e) => setStream(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default ModifyUser;
