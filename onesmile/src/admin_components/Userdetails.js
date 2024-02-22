import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Userdetails() {
    const [users, setuser] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8087/user/alluser").then((response) => {
        console.log(response.data);
        setuser(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }, []);


  return (
   <>
   
   <div className='container'>
    <h1>User Details</h1>
<div className='row'>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">UID</th>
        <th scope="col">FIRSTNAME</th>
        <th scope="col">LASTNAME</th>
        <th scope="col">UNAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">MOBILENO</th>
        <th scope="col">PASSWORD</th>
        <th scope="col">ROLE</th>
      </tr>
    </thead>
    <tbody>
      
        {
        
        users.map((user) => {
            return (
              <tr>
                <td>{user.uid}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.uname}</td>
                <td>{user.email}</td>
                <td>{user.mobileno}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>

                
    
              </tr>
            )
          })
        }

     
    </tbody>
  </table>

</div>
</div>

   
   
   
   </>
  )
}
