import { useState } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetail from './components/StarshipDetail';
import './App.css'; 

function App() {
  const [selectedStarship, setSelectedStarship] = useState(null);

  const handleStarshipSelect = (starship) => {
    setSelectedStarship(starship);
  };

  const handleGoBack = () => {
    setSelectedStarship(null);
  };
  return (
    <div className="container">
      {selectedStarship ? (
        <StarshipDetail starship={selectedStarship} onGoBack={handleGoBack} />
      ) : (
        <StarshipList onStarshipSelect={handleStarshipSelect} />
      )}
    </div>
  );
}

export default App;
