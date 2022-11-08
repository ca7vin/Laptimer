import React from "react";
import { useNavigate } from "react-router-dom";

class CreateLap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pilote: "",
      Circuit: "",
      Voiture: "",
      Temps: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { Pilote, Circuit, Voiture, Temps } = this.state;
    fetch("http://127.0.0.1:8000/api/laptime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Pilote: Pilote,
        Circuit: Circuit,
        Voiture: Voiture,
        Temps: Temps,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
          this.props.addLaptime(result.laptime);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
    this.props.navigate('/');
  }

  render() {
    return (
      <form className="form d-flex flex-column w-75 mx-auto" onSubmit={this.handleSubmit}>
        <label className="form-label">
          Pilote:
          <input
            className="form-control"
            type="text"
            name="Pilote"
            value={this.state.Pilote}
            onInput={this.handleChange}
          />
        </label>
        <label className="form-label">
          Circuit:
          <input
            className="form-control"
            type="text"
            name="Circuit"
            value={this.state.Circuit}
            onInput={this.handleChange}
          />
        </label>
        <label className="form-label">
          Voiture:
          <input
            className="form-control"
            type="text"
            name="Voiture"
            value={this.state.Voiture}
            onInput={this.handleChange}
          />
        </label>
        <label className="form-label">
          Temps:
          <input
            className="form-control"
            type="text"
            name="Temps"
            value={this.state.Temps}
            onInput={this.handleChange}
          />
        </label>
        <input className="btn btn-outline-primary w-50 mx-auto mt-3" type="submit" value="Submit" />
      </form>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <CreateLap {...props} navigate={navigate} />;
}

export default WithNavigate;
