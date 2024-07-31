import React, { useEffect, useState } from 'react';
import nutritionix from '../services/nutritionixService';
import './Resources.css';

const NutritionixComponent = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Initialize with API credentials from environment variables
    nutritionix.init();

    // Example usage: fetch nutrients
    nutritionix.utils.nutrients()
      .then(response => {
        setData(response || []);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter(item =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="nutritionix-container">
      <h1>Nutrients Data</h1>
      <input
        type="text"
        placeholder="Search nutrients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="card">
              <h2>{item.name}</h2>
              <p><strong>Calories:</strong> {item.calories || 'N/A'}</p>
              <p><strong>Protein:</strong> {item.protein || 'N/A'}g</p>
              <p><strong>Carbohydrates:</strong> {item.carbohydrates || 'N/A'}g</p>
              <p><strong>Fat:</strong> {item.fat || 'N/A'}g</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default NutritionixComponent;