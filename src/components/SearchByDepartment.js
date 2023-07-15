import axios from 'axios';
import React, { useState } from 'react'



const SearchByDepartment=()=> {

    const [college,setCollege]=useState("");
    const [dept,setDept]=useState("");
    const [temp,setTemp]=useState(0);
    const [students,setData]=useState([]);
   
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
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,ind)=>{
                            return (
                            <tr key={ind} className=''>
                               <td>{student.rollno}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.college}</td>
                                <td>{student.dept}</td>
                                <td>{student.maths}</td>
                                <td>{student.physics}</td>
                                <td>{student.chemistry}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       


    </div>}



    </div>
  )
}

export default SearchByDepartment