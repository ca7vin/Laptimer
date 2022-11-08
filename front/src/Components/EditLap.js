import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditLap = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [laptime, setLaptime] = useState([]);

  useEffect(() => {
    getLaptime();
  }, []);

  const getLaptime = () => {
    fetch(`http://127.0.0.1:8000/api/laptime/` + id)
      .then((res) => res.json())
      .then((data) => {
        setLaptime(data);
      });
  };

  const handleChange = (event) => {
    setLaptime({...laptime,[event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    console.log(laptime);
    fetch(`http://127.0.0.1:8000/api/laptime/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Pilote: laptime.Pilote,
        Circuit: laptime.Circuit,
        Voiture: laptime.Voiture,
        Temps: laptime.Temps,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setLaptime({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
    navigate("/");
  }
  return(
    <form className="form d-flex flex-column w-75 mx-auto" onSubmit={handleSubmit}>
        <label className="form-label">
          Pilote:
          <input
            className="form-control"
            type="text"
            name="Pilote"
            value={laptime.Pilote}
            onInput={handleChange}
          />
        </label>
        <label className="form-label">
          Circuit:
          <input
            className="form-control"
            type="text"
            name="Circuit"
            value={laptime.Circuit}
            onInput={handleChange}
          />
        </label>
        <label className="form-label">
          Voiture:
          <input
            className="form-control"
            type="text"
            name="Voiture"
            value={laptime.Voiture}
            onInput={handleChange}
          />
        </label>
        <label className="form-label">
          Temps:
          <input
            className="form-control"
            type="text"
            name="Temps"
            value={laptime.Temps}
            onInput={handleChange}
          />
        </label>
        <input className="btn btn-primary w-50 mx-auto mt-5" type="submit" value="Submit" />
      </form>
  )
};

export default EditLap;
