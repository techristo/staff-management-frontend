'use client'
import {useState ,useEffect}from 'react';
import axios from 'axios';
import Head from '../components/Head';
import TableHead from '../components/TableHead';
import TableBodyBusiness from '../components/TableBodyBusiness';

export default function Home() {

    const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState("");
  const [oldID, setOldID] = useState("");
  const [refresh, setRefresh] = useState(0);

  const headData:any=[{"id":1,"text":"ID"},{"id":2,"text":"Name"},{"id":3,"text":"Location"},{"id":4,"text":"Type"},{"id":5,"text":"Action"},];


  const handleSubmit = (event:any) => {
    event.preventDefault();
  console.log(name, location, type);
  
  axios.put('https://staff-management-system-ews1.onrender.com/business/put/'+oldID, { name: name, location:location, type:type } , {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => {
      if (res.data) {
        console.log(res.data);
      } else {
        alert('Business Changed');
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error Put');
    });
    setRefresh(1);
  }

  useEffect(() => {
    axios.get('https://staff-management-system-ews1.onrender.com/business/get', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
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
    <label  className="form-label">Row ID on Table:</label>
    <input type="text" className="form-control" id="oldID" placeholder="Enter old id" name="oldID" value={oldID}  onChange={(e) => setOldID(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter name" name="name" value={name}  onChange={(e) => setName(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Location:</label>
    <input type="text" className="form-control" id="pwd" placeholder="Enter loction" name="location" value={location}  onChange={(e) => setLocation(e.target.value)} required />
  </div>
  <div className="mb-3">
  <label  className="form-label">Select Type of Business:</label>
    <select className="form-select" id="type" name="type" value={type}  onChange={(e) => setType(e.target.value)}>
      <option value="Unselected">Unselected</option>
      <option value="Bar">Bar</option>
      <option value="Restaurant">Restaurant</option>
      <option value="Club">Club</option>
      <option value="Restaurant">Hotel</option>
      <option value="Club">Cafe</option>
    </select>
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
<TableBodyBusiness data={data} />
</table>
    </>

    );
}