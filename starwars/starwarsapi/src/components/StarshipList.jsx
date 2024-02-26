import { useState, useEffect } from "react";
import React from "react";

function StarshipList({ onStarshipSelect }) {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.error("Error fetching starships", error));
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="starship-list"> {/* className eklendi */}
      <input
        type="text"
        placeholder="Search by name or model"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredStarships.map((starship) => (
          <li key={starship.url}>
            <button onClick={() => onStarshipSelect(starship)}>
              {starship.name} - {starship.model}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipList;
