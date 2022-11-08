// import React from 'react'
// import Liste from './Components/Liste'

// export default function App() {
//   return (
//     <div className='d-flex flex-column align-items-center justify-content-center'>
//       <h1 className='text-center'>LAPS RECORDED</h1>
//       <button className="btn btn-outline-success w-75 my-3 text-uppercase">Add a new lap record</button>
//       <Liste/>
//     </div>
//   )
// }


import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import CreateLap from './Components/CreateLap';
import EditLap from './Components/EditLap';
import Liste from './Components/Liste';
import "./sass/style.sass"
import { useState, useEffect } from "react";
import axios from "axios";



function App() {

  const [laptimes, setLaptimes] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/laptimes";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLaptimes(response.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul className='d-flex'>
            <li>
              <Link className="btn btn-outline-success text-uppercase m-3" to="/">Laptimes Recorded</Link>
            </li>
            <li>
              <Link className="btn btn-outline-primary text-uppercase m-3"  to="/create">Add a Laptime</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Liste laptime={laptimes}/>}/>
          <Route path="/create" element={<CreateLap/>}/>
          <Route path="/book/edit/:id" element={<EditLap />}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
