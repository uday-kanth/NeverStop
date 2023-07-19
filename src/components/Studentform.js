import React from 'react'

function Studentform() {
 
  return (
    <div className='container'>
    <form className='form-horizontal' id='candi_form' onSubmit={()=>{alert("the data has been inserted")}}  method='POST' action="http://localhost:5000/put_db" encType='multipart/form-data' >




<div className='row p-3 '>

    <div className='form-group col-lg-4'>
<label htmlFor="name" className='control-label fw-bold' style={{fontSize:"25px"}}>Name :</label>
<input name="name" type="text" className='form-control form-control-lg  border border-3 border-dark' required   id='name' placeholder='Enter Name :' />
 </div>
 
 

    <div className='form-group col-lg-4'>
<label htmlFor="A" className='control-label fw-bold' style={{fontSize:"25px"}} >Age :</label>
<input name="age" type="number" min="15" max="100" className='form-control form-control-lg border border-3 border-dark' id='age' required placeholder='Enter age' />
 </div>
 
 </div>


 <div className='row p-3 '>

    <div className='form-group col-lg-4'>
<label htmlFor="rollno" className='control-label fw-bold' style={{fontSize:"25px"}} >Roll no :</label>
<input name="rollno" type="text" className='form-control form-control-lg border border-3 border-dark'  required id='rollno' placeholder='Enter roll no :' />
 </div>
 


    <div className='form-group col-lg-4'>
<label htmlFor="college" className='control-label fw-bold' style={{fontSize:"25px"}}>College Name :</label>
<input name="college" type="text" className='form-control form-control-lg border border-3 border-dark' required  id='college' placeholder='Enter College name' />
 </div>
 

    <div className='form-group col-lg-4'>
<label htmlFor="dept" className='control-label fw-bold' style={{fontSize:"25px"}}>Department Name :</label>
{/* <input name="dept" type="text" className='form-control form-control-lg border border-3 border-dark' required  id='dept' placeholder='Enter Department name' /> */}
<select className='row form-select border border-3 border-dark' name="dept" id="dept" required>
    <option value="">Select</option>
    <option value="cse">CSE</option>
    <option value="csd">CSD</option>
    <option value="csm">CSM</option>
    <option value="it">IT</option>

</select>
 </div>
 
 </div>

 <div className='row p-3 '>

    <div className='form-group col-lg-4'>
<label htmlFor="maths" className='control-label fw-bold' style={{fontSize:"25px"}}  >Maths marks :</label>
<input name="maths" type="number" className='form-control form-control-lg border border-3 border-dark' min="0" max="100" required  id='maths' placeholder='Enter marks' />
 </div>
 
 

    <div className='form-group col-lg-4'>
<label htmlFor="physics" className='control-label fw-bold' style={{fontSize:"25px"}}  >Physics marks :</label>
<input name="physics" type="number" className='form-control form-control-lg border border-3 border-dark' min="0" max="100" required  id='physics' placeholder='Enter marks' />
 </div>
 


    <div className='form-group col-lg-4'>
<label htmlFor="chemistry" className='control-label fw-bold' style={{fontSize:"25px"}} >Chemistry marks :</label>
<input name="chemistry" type="number" className='form-control form-control-lg border border-3 border-dark' min="0" max="100" required id='chemistry' placeholder='Enter marks' />
 </div>
 
 </div>


 



 <div className='row p-3 '>

    <div className='form-group col-lg-4'>
<label htmlFor="image" className='control-label fw-bold ' style={{fontSize:"25px"}}>Upload Image :</label>
<input name='image' type="file" className='form-control form-control-lg border border-3 border-dark' required  id='image' placeholder='upload image' accept="image/*" />
 </div>
 
 </div>

<div className='row p-3 ' style={{width:'150px'}}> <button className='btn btn-success' type='submit' >submit</button></div>
 

 






</form>



    </div>
  )
}

export default Studentform