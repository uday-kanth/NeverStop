import axios from 'axios';
import React, { useState } from 'react'
import Modal from './Modal';


const SearchByRoll=()=> {

    const [rollno,setRollno]=useState(0);
    const [temp,setTemp]=useState(0);
    const [students,setData]=useState([]);
   
    const getdetails=async()=>{
    await axios.post('http://localhost:5000/getByRoll',{  rollno:rollno  }).then((res)=>{
        //console.log(...res.data.items)
        setData(res.data.items)
        
        
    });

    
    
    setTemp(1);
    }
    





  return (
    <div className='container mt-5'>
    <div className='row '>
    <div className='col-md-6'>
    <input type="text"  className='form-control  border border-3 border-dark' required   placeholder="enter the roll no" onChange={(e)=>{setRollno(e.target.value)}} />
    </div>
    <div className='col-md-6'><button className='btn btn-primary' onClick={()=>{ if(rollno.length>0){getdetails();} else{alert("Enter the college name")}}}>get details</button></div>
    </div>

    {temp===1 && <div className='my-5'>

        
            <table className='table table-striped ' style={{fontSize:"20px"}}>
                <thead>
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
                        students.map((student)=>{
                            return (
                            <>
                               <td>{student.rollno}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.college}</td>
                                <td>{student.dept}</td>
                                <td>{student.maths}</td>
                                <td>{student.physics}</td>
                                <td>{student.chemistry}</td>
                            </>
                            )
                        })
                    }
                </tbody>
            </table>
       


    </div>}



    </div>
  )
}

export default SearchByRoll