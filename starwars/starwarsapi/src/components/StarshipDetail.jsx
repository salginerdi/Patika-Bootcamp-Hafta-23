import React from "react";

function StarshipDetail({ starship, onGoBack }) {
  return (
    <div className="starship-detail">
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}

export default StarshipDetail;
