import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CreateLap from "./Components/CreateLap";
import EditLap from "./Components/EditLap";
import Liste from "./Components/Liste";
import "./sass/style.sass";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [laptimes, setLaptimes] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/laptimes";
  // FETCH
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLaptimes(response.data);
    });
  }, []);
  // ADD LAP FRONT
  const addLaptime = (newLaptime) => {
    setLaptimes((prevLaptimes) => [...prevLaptimes, newLaptime]);
  };
  // REMOVE LAP FRONT
  const removeLaptime = (idToDel) => {
    setLaptimes((prevLaptimes) =>
      prevLaptimes.filter((prevLaptime) => prevLaptime.id !== idToDel)
    );
  };
  // REFRESH LAP TIME
  const refreshLaptime = (idToRefresh, pilote, circuit, voiture, temps) => {
    console.log("je rentre dedans")
    setLaptimes((prevLaptimes) =>
      prevLaptimes.map((prevLaptime) => {
        console.log(idToRefresh, prevLaptime.id)
        if (prevLaptime.id == idToRefresh) {
          return {
            ...prevLaptime,
            Pilote: pilote,
            Circuit: circuit,
            Voiture: voiture,
            Temps: temps,
          };
        }
        return prevLaptime;
      })
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="d-flex mt-5 align-items-center justify-content-center p-0">
            <li>
              <Link
                className="btn btn-success text-uppercase m-3"
                to="/"
              >
                Laptimes Recorded
              </Link>
            </li>
              <h1 className="text-uppercase m-2 fw-bold">Recorded Laps</h1>
            <li>
              <Link
                className="btn btn-primary text-uppercase m-3"
                to="/create"
              >
                Add a Laptime
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Liste laptimes={laptimes} removeLaptime={removeLaptime} />
            }
          />
          <Route
            path="/create"
            element={<CreateLap addLaptime={addLaptime} />}
          />
          <Route
            path="/laptime/edit/:id"
            element={<EditLap refreshLaptime={refreshLaptime} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
