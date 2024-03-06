import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../Common/NavBar";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ViewUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  console.log(userId);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    surName: "",
    email: "",
    address: "",
    providerId: null,
  });
  const handleDelete = (id) => {
    fetch("http://localhost:8080/users/delete/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedUsers = [...users].filter((i) => i.id !== id);
      setUsers(updatedUsers);
    });
    //  window.location.reload();
    navigate("/admin");
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/users/get/${userId}`
      );
      setUser(result.data);
      console.log(result.data);
    };
    loadUser();
  }, [userId]);

  return (
    <section className="shadow">
      <NavBar />
      <div style={{ background: "#ECFFDC", width: "100vw", height: "100vh" }}>
        <div className="container py-5">
          <div
            className="row"
            style={{
              marginLeft: "12%",
              marginTop: "150px",
              background: "ECFFDC",
            }}
          >
            <div className="col-lg-3">
              <div className="card mb-4">
                <div
                  className="card-body text-center"
                  style={{ height: "340px", width: "auto" }}
                >
                  <IoPersonCircle
                    style={{
                      fontSize: "200px",
                      marginBottom: "0",
                      color: "green",
                    }}
                  />
                  <h5 style={{ marginTop: "0" }} className="my-3">
                    {`${user.firstName} ${user.surName}`}{" "}
                  </h5>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center"
                       
                    }}
                  >
                    <button className="td--delete" style={{background:"blue"}}>
                    <Link to="/admin">
                       <IoMdArrowRoundBack style={{ color: "white"}} />
                    </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(user.userId)}
                      className="td--delete"
                    >
                      <MdDelete style={{ fontSize: "30px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9" style={{color:"green"}}>
              <div className="card mb-4" >
                <div className="card-body" >
                  <hr />

                  <div className="row" >
                    <div className="col-sm-3">
                      <h5 className="mb-0">First Name</h5>
                    </div>

                    <div className="col-sm-9" >
                      <p className="text-muted mb-0" >{user.firstName}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Surname</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.surName}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Email</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Address</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.address}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Energy Provider ID</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.providerId}</p>
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

export default ViewUser;
