
import './App.css';
import { useState } from 'react';
import Studentfrom from './components/Studentform';
import SearchByRoll from './components/SearchByRoll';
import SearchByCollege from './components/SearchByCollege';
import SearchByDepartment from './components/SearchByDepartment';

const App=()=> {

  const [choice,setChoice]=useState(0);

  return (
    <div className="App">


<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a className="navbar-brand text-light" href="#"> <h2>NeverStop</h2></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={()=>{setChoice(0)}}><h3>Enter Details</h3> </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={()=>{setChoice(2)}}><h3>Search by college</h3></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={()=>{setChoice(1)}}><h3>Search by roll</h3></a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw" href="#" onClick={()=>{setChoice(3)}}><h3>Search by department</h3></a>
      </li>
    </ul>
  </div>
</nav>



    { choice===0 && <div className='container back1' >
        <Studentfrom></Studentfrom>

    </div>

    }

    { choice===1 && <div className='container justify-content-center' style={{ width:'60%' }}>
        <SearchByRoll></SearchByRoll>

    </div>

    }
    { choice===2 && <div className='container justify-content-center' style={{ width:'60%' }}>
        <SearchByCollege></SearchByCollege>

    </div>

    }
    { choice===3 && <div className='container justify-content-center' style={{ width:'60%' }}>
        <SearchByDepartment></SearchByDepartment>

    </div>

    }




      
    </div>
  );
}

export default App;
