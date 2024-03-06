import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import NavBar from "../Common/NavBar";
import { Link } from "react-router-dom";

import { MdOutlineAddHomeWork } from "react-icons/md";

const AddProvider = () => {
  const [provider, setProvider] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/energyProvider/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(provider),
    })
      .then((response) => response.json())
      .then((data) => console.log("Provider created:", data))
      .catch((error) => console.error("Error creating user:", error));
    window.location.reload();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setProvider({ ...provider, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <div className="adduser" style={{ background: "#ECFFDC" }}>
        <h2 style={{ marginTop: "70px" }}>Add Energy Provider</h2>
        <MdOutlineAddHomeWork
          style={{ fontSize: "100px", marginTop: "10px", marginBottom: "10px" }}
        />

        <form
          className="user--form"
          id="provider--form"
          onSubmit={handleSubmit}
        >
          <MDBInput
            label="Company name"
            name="name"
            type="text"
            value={provider.name}
            onChange={(e) => handleChange(e)}
          />

          <MDBInput
            label="Email"
            name="email"
            type="email"
            value={provider.email}
            onChange={(e) => handleChange(e)}
          />

          <MDBInput
            label="Contact"
            name="contactNumber"
            type="text"
            value={provider.contactNumber}
            onChange={(e) => handleChange(e)}
          />

          <MDBInput
            label="Address "
            name="address"
            type="text"
            value={provider.address}
            onChange={(e) => handleChange(e)}
          />

          <div className="button--add">
            <button className="user--submit">Submit</button>
            <Link className="user--cancel" to="/admin">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProvider;
