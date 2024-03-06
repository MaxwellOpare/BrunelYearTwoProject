import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { MDBInput} from "mdb-react-ui-kit";
import { FaUserEdit } from "react-icons/fa";
import NavBar from '../Common/NavBar';
import axios from 'axios'


const EditUsers = () => {

  let navigate = useNavigate();

	const {userId}  = useParams();

  const [providers, setProvider] = useState([]);
	const [user, setUser] = useState({
		firstName: "",
		surName: "",
		email: "",
		address: "",
    providerId: 0
	});
	

	useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/users/get?${userId}`
      );
      setUser(result.data);
    };
		loadUser();
	}, [userId]);




	const handleChange = (e) => {
    setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

  const handleSubmit = async (e) => {
		e.preventDefault();  
		await axios.put(
			`http://localhost:8080/users/add/${userId}`,user
		);
		navigate("/admin");
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
    <div className='adduser' style={{background:"#ECFFDC"}}>
        <NavBar/>
        <h2 style={{marginTop:"70px"}}>Edit User</h2>
        <FaUserEdit style={{fontSize:"70px", marginBottom:'50px',color:"green"}} />
       <form style={{height:"400px", background:"#F4FFF0"}} className="user--form" onSubmit={handleSubmit}>
          <MDBInput
            label="First name"
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            label="Surname"
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
            // value={user.energyProvider.energyProviderId}
            value={user.providerId}
            // onChange={(e)=>({...providers,[e.target.name]:e.target.value})}
            onChange={(e) => handleChange(e)}
          >
            <option className='form--option'>Choose Energy Provider</option>
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
  )
}

export default EditUsers