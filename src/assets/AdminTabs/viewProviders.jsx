import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../Common/NavBar";
import { GoOrganization } from "react-icons/go";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ViewProvider = () => {
  const { energyProviderId } = useParams();
  const navigate = useNavigate();
  console.log(energyProviderId);

  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState({
    name: "",
        email: "",
        contactNumber: "",
        address: "",
        users:[]
  });
  const handleDelete = (id) => {
    fetch("http://localhost:8080/energyProvider/delete/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedProviders = [...providers].filter((i) => i.id !== id);
      setProviders(updatedProviders);
    });
  
    navigate("/admin");
  };

  useEffect(() => {
    const loadProvider = async () => {
      const result = await axios.get(
        `http://localhost:8080/energyProvider/get/${energyProviderId}`
      );
      setProvider(result.data);
      console.log(result.data);
    };
    loadProvider();
  }, [energyProviderId]);

  return (
    <section className="shadow" style={{ background: "whitesmoke" }}>
      <NavBar />
      <div style={{ background: "#ECFFDC", width: "100vw", height: "100vh" }}>
      <div
        className="container py-5"
      >
        <div className="row" style={{
              marginLeft: "12%",
              marginTop: "150px",
              background: "ECFFDC",
            }} >
          <div className="col-lg-3" >
            <div className="card mb-4" >
              <div
                className="card-body text-center"
                style={{marginBottom:"0",height:"auto"}}
              >
                <GoOrganization style={{ fontSize: "200px" ,color: "green",}} />
                <h5 className="my-3">{`${provider.name}`}</h5>
                <div className=""
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center"}}
                >
                <button className="td--delete" style={{background:"blue"}}>
                    <Link to="/admin">
                       <IoMdArrowRoundBack style={{ color: "white"}} />
                    </Link>
                    </button>
                    <button
                    onClick={() => handleDelete(provider.energyProviderId)}
                    className="td--delete"
                  >
                     <MdDelete  style={{fontSize:"30px"}}/>
                  </button>
                </div>
              </div>
            </div>
            </div>

          <div className="col-lg-9" style={{color:"green"}}>
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Company Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{provider.name}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Contact Number</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{provider.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Address</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{provider.contactNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{provider.address}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Number of Users</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{provider.users.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default ViewProvider;
