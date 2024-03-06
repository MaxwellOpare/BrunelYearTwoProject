import React,{useEffect, useState} from "react";
import { Link} from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

 
const Users = () => {
  const [ search, setSearch]= useState('')
  const [users, setUsers] = useState([]);
    // const handleDelete = (id) => {
    //   fetch("http://localhost:8080/users/delete/"+id, {
    //       method: "DELETE",
    //       headers: {"Accept":"application/json", "Content-Type":"application/json"}
    //   }).then(() => {
    //       let updatedUsers = [...users].filter(i => i.id !== id);
    //       setUsers(updatedUsers);
    //   });
    //    window.location.reload();
    //   }

    useEffect(() => {
      fetch("http://localhost:8080/users/get").then((res) => {
          return res.json();
      }).then((data) => {
          setUsers(data);
      })
  }, []);
      
   
    return(
       <div className="general">
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
      <h2>{users.length} {users.length <= 1?'User':'Users'}</h2>
   </section>
        <table className="Utable">
       <thead>
          
              <th>User ID</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Address</th>
              <th>Energy Provider</th>
              <th colSpan={2}>actions</th>
             
        </thead>  
        <tbody>
       {users.filter((st) =>st.firstName.toLowerCase().includes(search)
						).map(user => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.surName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.providerId}</td>
                {/* <td ><button onClick={()=> handleDelete(user.userId)} className="td--delete">Delete</button></td> */}
                <td><button className="td--edit" style={{background:"green"}}><Link style={{color:"white"}} to={`/viewuser/${user.userId}`}><FaEye /></Link></button></td>
                <td><button className="td--edit" style={{background:"blue"}}><Link to={`/edituser/${user.userId}`}><CiEdit style={{color:"white"}} /></Link></button></td>
              </tr>
            ))}
       </tbody>
   </table>
  <button className="add--button"> <Link to='/addusers' className="add"><IoMdPersonAdd className="ok"/></Link></button>
   </div>
    );
    

}
 
export default Users;