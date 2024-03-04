import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [stream, setStream] = useState();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/createUser`, { name, email, stream })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Stream</label>
            <input
              type="text"
              placeholder="Enter your stream"
              className="form-control"
              onChange={(e) => setStream(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
