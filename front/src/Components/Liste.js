import React from "react";


export default function Liste(props) {
  console.log(props)
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
            <tr>
              <th scope="row">{laptime.id}</th>
              <td>{laptime.Pilote}</td>
              <td>{laptime.Circuit}</td>
              <td>{laptime.Voiture}</td>
              <td>{laptime.Temps}</td>
              <td>
                <button className="btn btn-outline-warning text-uppercase me-3">Edit</button>
                <button className="btn btn-outline-danger text-uppercase">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
