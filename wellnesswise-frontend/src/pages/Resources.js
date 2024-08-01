import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Resources.css';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchResources = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/resources');
      setResources(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching data: ' + err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="wellness-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a wellness resource..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
  
      <div className="resource-list">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <h3>{resource.title}</h3>
              <p className='category'><strong>Category:</strong> {resource.category}</p>
              <p>{resource.description}</p>
              
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="visit_link">
                  Visit
                </a>
             
            </div>
          ))
        ) : (
          <p>No resources found</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
