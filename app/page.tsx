'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    
  
  axios.post('https://staff-management-system-ews1.onrender.com/auth/login', { uname: uname, pwd:pwd } )
    .then(res => {
      if (res.data) {
       localStorage.setItem( 'token',res.data.access_token);
        window.location.replace('/admin');
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in');
    });
    
  }

  return (
    <>
   <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Stafoo</h1>
  <p>Stafoo is a platform for managing your staffmembers.</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
  
    </div>
    <div className="col-sm-4">
    <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Username:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" value={uname}  onChange={(e) => setUname(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={pwd}  onChange={(e) => setPwd(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    <div className="col-sm-4">
      
    </div>
  </div>
</div>
    </>
  );
}
