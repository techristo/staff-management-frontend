'use client'
import {useState ,useEffect}from 'react';
import axios from 'axios';
import Head from '../components/Head';
import TableHead from '../components/TableHead';
import TableBodyStaff from '../components/TableBodyStaff';

export default function Home() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [btype, setBtype] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");
  const [refresh, setRefresh] = useState(0);

  const headData:any=[{"id":1,"text":"ID"},{"id":2,"text":"First Name"},{"id":3,"text":"Last Name"},{"id":4,"text":"Email"},{"id":5,"text":"Position"},{"id":6,"text":"Business Type"},{"id":7,"text":"Phone"},{"id":8,"text":"Action"},];


  const handleSubmit = (event:any) => {
    event.preventDefault();
 
  
  axios.post('https://staff-management-system-ews1.onrender.com/staffmember/post', { fname: fname, lname:lname, email:email, position:position, btype:btype, phone:phone } , {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => {
      if (res.data) {
        alert('Business Added');
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error Post');
    });
    setRefresh(1);
  }

  useEffect(() => {
    axios.get('https://staff-management-system-ews1.onrender.com/staffmember/get', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => {
      if (res.data) {
        setData(res.data);
      } else {
        alert('Invalid input');
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error');
    });

    setRefresh(0);
  }, [refresh]);
    return (<>
    <Head />
   <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Business</h1>
  <p>Manage your Businesses.</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
  
    </div>
    <div className="col-sm-4">
    <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label  className="form-label">First Name:</label>
    <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="fname" value={fname}  onChange={(e) => setFname(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Last Name:</label>
    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" value={lname}  onChange={(e) => setLname(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
  </div>
 
  <div className="mb-3">
  <label  className="form-label">Select Position:</label>
    <select className="form-select" id="position" name="position" value={position}  onChange={(e) => setPosition(e.target.value)} required>
      <option value="Unselected">Unselected</option>
      <option value="Kitchen">Kitchen</option>
      <option value="Service">Service</option>
      <option value="PR">PR</option>
    </select>
  </div>
  <div className="mb-3">
  <label  className="form-label">Select Type of Business:</label>
    <select className="form-select" id="btype" name="btype" value={btype}  onChange={(e) => setBtype(e.target.value)} required>
      <option value="Unselected">Unselected</option>
      <option value="Bar">Bar</option>
      <option value="Restaurant">Restaurant</option>
      <option value="Club">Club</option>
      <option value="Restaurant">Hotel</option>
      <option value="Club">Cafe</option>
    </select>
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone:</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter phone" name="phone" value={phone}  onChange={(e) => setPhone(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    <div className="col-sm-4">
      
    </div>
  </div>
</div>
<table className="table">
<TableHead data={headData} />
<TableBodyStaff data={data} />
</table>
    </>

    );
}