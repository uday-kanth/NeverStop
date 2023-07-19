import axios from 'axios';
import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'; 




const SearchByDepartment=()=> {

    const [college,setCollege]=useState("");
    const [dept,setDept]=useState("");
    const [temp,setTemp]=useState(0);
    const [students,setData]=useState([]);

    const [show, setShow] = useState(false);
    const [index,setIndex]=useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const getdetails=async()=>{
    await axios.post('http://localhost:5000/getByDept',{  college:college ,dept:dept }).then((res)=>{
        //console.log(...res.data.items)
        setData(res.data.items)
    });

    
    
    setTemp(1);
    }
    





  return (
    <div className='container mt-5' >
    <div className='row'>
    <div className='col-md-6'>
    <input type="text"  className='form-control  border border-3 border-dark' required  placeholder='enter College name' onChange={(e)=>{setCollege(e.target.value)}} /></div>
    <div className='col-md-6'>
    <input type="text"  className='form-control  border border-3 border-dark' required  placeholder='enter Department name' onChange={(e)=>{setDept(e.target.value)}} /></div>
    </div>
    <div className='row mt-5 text-center'>
    <div className='col'>
    <button className='btn btn-primary' onClick={()=>{ if(college.length>0 && dept.length>0){getdetails();} else{alert("Enter both fields")}}}>get details</button>
    </div>
</div>

    {temp===1 && <div className='mt-5'>

        
        <table className='table table-striped table-bordered ' style={{fontSize:"20px"}}>
                <thead className='table-dark'>
                    <tr>
                        <th>Roll number</th>
                    
                        <th>Name</th>
                    
                        <th>Age</th>
                    
                        <th>College</th>
                   
                        <th>Dept</th>
                   
                        <th>Maths</th>
                    
                        <th>Physics</th>
                    
                        <th>Chemistry</th>
                        <th>Average</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,ind)=>{
                            return (
                                <tr key={ind}>
                            
                            <td onClick={()=>{setIndex(ind);handleShow();}} style={{cursor:"pointer"}} className='fw-bolder ' >{student.rollno}</td>
                             <td>{student.name}</td>
                             <td>{student.age}</td>
                             <td>{student.college}</td>
                             <td>{student.dept}</td>
                             <td>{student.maths}</td>
                             <td>{student.physics}</td>
                             <td>{student.chemistry}</td>
                             <td>{Number((student.maths+student.chemistry+student.physics)/3).toFixed(2)}</td>
                         
                         </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Modal centered show={show} onHide={handleClose}>  
      <Modal.Header  className='bg-dark'>  
        <Modal.Title className='text-light'>{students[index].rollno}</Modal.Title>  
      </Modal.Header>  
  
      <Modal.Body>  
        <div className='container modal__body'>
          <div className='row'>
                    <div className='col-md-6'>
                    <img src={"data:"+students[index].image.contentType+";base64,"+ btoa(String.fromCharCode.apply(null, new Uint8Array(students[index].image.data.data)))} alt="" style={{width:"100%", height:"100%"}} />
                    </div>
                    <div className='col-md-6'>
                     <div> Name: {students[index].name}</div>
                      <div>Age: {students[index].age}</div>
                     <div> Roll no: {students[index].rollno}</div>
                     <div>Department: {students[index].dept}</div> 
                     <div> College: {students[index].college}</div>
                      
                    </div>
          </div>
        </div>
      </Modal.Body>  
  
      <Modal.Footer>  
        <button className='btn btn-danger' onClick={handleClose}>Close</button>   
      </Modal.Footer>  
</Modal> 
       


    </div>}



    </div>
  )
}

export default SearchByDepartment