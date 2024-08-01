import React, { useEffect, useState, useMemo } from 'react';

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
        console.log('API Response:', response); // Log the response
        setData(response || []);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  const filteredData = useMemo(() => {
    const result = data.filter(item =>
      item.usda_nutr_desc &&
      item.usda_nutr_desc.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    console.log('Filtered Data:', result); // Log the filtered data
    return result;
  }, [data, searchTerm]);

  if (error) {
    return <div>Error: {error.error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

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
              <h2>{item.usda_nutr_desc}</h2>
              <p><strong>Unit:</strong> {item.unit}</p>
              <p><strong>Protein:</strong> {item.usda_sr_order}g</p>
              <p><strong>Carbohydrates:</strong> {item.carbohydrates}g</p>
              <p><strong>Fat:</strong> {item.fat}g</p>
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
