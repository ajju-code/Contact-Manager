import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddContact = ({ addContacthandler }) => {
  // Define state variables using useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Enter All The Fields");
      return;
    }
    addContacthandler({ name, email });
  };

  return (
    <>
      <div className="Contact_form">
        <form onSubmit={add}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
