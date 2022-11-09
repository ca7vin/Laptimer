import React from "react";
import { Link } from "react-router-dom";

export default function Liste(props) {
  const delLaptime = (id) => {
    console.log(id);
    console.log(props.removeLaptime)
    fetch(`http://127.0.0.1:8000/api/laptime/` + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          props.removeLaptime(id);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <table className="table mx-auto w-75">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pilote</th>
          <th scope="col">Circuit</th>
          <th scope="col">Voiture</th>
          <th scope="col">Temps</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.laptimes.map((laptime) => {
          return (
            <tr key={laptime.id}>
              <th scope="row">{laptime.id}</th>
              <td>{laptime.Pilote}</td>
              <td>{laptime.Circuit}</td>
              <td>{laptime.Voiture}</td>
              <td>{laptime.Temps}</td>
              <td>
                <button className="btn btn-warning text-uppercase me-3">
                  <Link
                    className="text-decoration-none text-white"
                    to={{ pathname: "laptime/edit/" + laptime.id }}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => delLaptime(laptime.id)}
                  className="btn btn-danger text-uppercase"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
