'use client'
import axios from 'axios';

function TableBodyStaff(props:any) {

const onDelete = (id:any) => {
  axios.delete('https://staff-management-system-ews1.onrender.com/staffmember/delete/'+id, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => {
      if(res.data){
          console.log(res.data);
        }else{
        alert('Staff member deleted');
        location.reload();

      }
    })
    .catch(err => {
      console.error(err);
      alert('Error Delete');
    });

  
}

const data=[...props.data];
  return (<>
  
  <tbody>

   {data?.map((row: any) => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.fname}</td>
      <td>{row.lname}</td>
      <td>{row.email}</td>
      <td>{row.position}</td>
      <td>{row.btype}</td>
      <td>{row.phone}</td>
      <td><button onClick={() => {onDelete(row.id);}} type="button" className="btn btn-danger">Delete</button></td>
    </tr>
   ))}
      
    </tbody>
  
  </>
    
  );
}

export default TableBodyStaff;