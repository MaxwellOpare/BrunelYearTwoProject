import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";


const EnergyProviders = () => {
  const [ search, setSearch]= useState('')
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/energyProvider/get")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProviders(data);
        console.log(data)
      });
  }, []);

  // const handleDelete = (id) => {
  //   fetch("http://localhost:8080/energyProvider/delete/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then(() => {
  //     let updatedUsers = [...providers].filter((i) => i.id !== id);
  //     setProviders(updatedUsers);
  //   });
  //   window.location.reload();
  // };

  return (
    
    <section className="general">
        <div className="search"  >      
      <input
        type="search"
        role="searchbox"
        placeholder="Search Users..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        onSubmit={(e) => e.preventDefault()}
      />
      
    </div>
    <section className="up--tab">
      <h2>{providers.length} {providers.length <= 1?'Energy Provider':'Energy Providers'}</h2>
   </section>
      <table className="Utable">
        <tr>
          <th>Company Id</th>
          <th>Company Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Address</th>
          <th colSpan={2}>actions</th>
        </tr>

        {providers.filter((st) =>st.name.toLowerCase().includes(search)
						).map((provider) => (
          <tr key={provider.energyProviderId}>
            <td>{provider.energyProviderId}</td>
            <td>{provider.name}</td>
            <td>{provider.address}</td>
            <td>{provider.email}</td>
            <td>{provider.contactNumber}</td>
            {/* <td>
              <button
                onClick={() => handleDelete(provider.energyProviderId)}
                className="td--delete"
              >
                Delete
              </button>
            </td> */}
            <td><button className="td--edit"><Link to={`/editprovider/${provider.energyProviderId}`}><CiEdit style={{color:"white"}} /></Link></button></td>
            <td>
              <button className="td--edit" style={{background:"green"}}><Link style={{color:"white"}} to={`/viewprovider/${provider.energyProviderId}`}><FaEye /></Link></button>
            </td>
          </tr>
        ))}
      </table>
      <button className="add--button"> <Link to='/addprovider' className="add"><IoMdPersonAdd className="ok"/></Link></button>
    </section>
  );
};

export default EnergyProviders;
