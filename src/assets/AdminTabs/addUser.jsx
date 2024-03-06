import React, { useState, useEffect } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import NavBar from "../Common/NavBar";
import { Link } from "react-router-dom";
import { TiUserAdd } from "react-icons/ti";

const AddUser = () => {
  const [providers, setProvider] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    surName: "",
    email: "",
    address: "",
    providerId: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log("User created:", data))
      .catch((error) => console.error("Error creating user:", error));
    window.location.reload();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("http://localhost:8080/energyProvider/get")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProvider(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="adduser">
        <h2 style={{marginTop:"70px"}}>Add User</h2>
        <TiUserAdd style={{ fontSize: "100px", color:"green" }} />

        <form style={{height:"400px",background:"#F4FFF0"}} className="user--form" onSubmit={handleSubmit}>
          <MDBInput
            required
            label="First name"
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            label="surName"
            required
            name="surName"
            type="text"
            value={user.surName}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            label="Email"
            required
            name="email"
            type="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            label="Adress: Hse# and street name, town, postcode "
            required
            name="address"
            type="text"
            value={user.address}
            onChange={(e) => handleChange(e)}
          />

          <select
            style={{ fontSize: "17px", padding: "7px" }}
            className="form--select"
            name="providerId"
           
            value={user.providerId}
           
            onChange={(e) => handleChange(e)}
          >
            <option className="form--option">Choose Energy Provider</option>
            {providers.map((provider) => (
              <option
                key={provider.energyProviderId}
                value={provider.energyProviderId}
              >
                {provider.name}
              </option>
            ))}
          </select>

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

export default AddUser;
