import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { TbHomeEdit } from "react-icons/tb";
import NavBar from "../Common/NavBar";
import axios from "axios";

const EditProviders = () => {
  let navigate = useNavigate();

  const { energyProviderId } = useParams();

  const [provider, setProvider] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/energyProvider/get?${energyProviderId}`
      );
      setProvider(result.data);
    };
    loadUser();
  }, [energyProviderId]);

  const handleChange = (e) => {
    setProvider({
      ...provider,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/energyProvider/add/${energyProviderId}`,
      provider
    );
    navigate("/admin");
  };

  return (
    <div className="adduser" style={{ background: "#ECFFDC" }}>
      <NavBar />
      <h2 style={{ marginTop: "70px" }}>Edit Provider</h2>
      <TbHomeEdit
        style={{ fontSize: "70px", marginBottom: "50px", color: "green" }}
      />
      <form className="user--form" onSubmit={handleSubmit}>
        <MDBInput
          label="Name"
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
          label="Contact Number"
          required
          name="contactNumber"
          type="text"
          value={provider.contactNumber}
          onChange={(e) => handleChange(e)}
        />
        <MDBInput
          label="Adress: Hse# and street name, town, postcode "
          required
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
  );
};

export default EditProviders;
