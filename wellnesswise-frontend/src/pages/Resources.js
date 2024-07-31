import React, { useEffect } from 'react';

const WellnessPage = () => {
  const APP_ID = ''
  const APP_KEY = ''
  useEffect(() => { 
    const fetchData = async () => {
     const headers = new Headers();
     headers.append('x-app-id', APP_ID);
     headers.append('x-app-key', APP_KEY);

     const requestOptions ={
      method: 'GET',
      headers: headers,
     };
     try{
      const response = await fetch(`https://api.nutritionix.com/v1_1/search/apple?results=0%3A20&fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`,
          requestOptions);
          if (!response.ok) {
            throw new Error('HTTP erroe! status: ${response.status}');
          }
          const data = await response.json();
          console(data.hits);
     }
     catch (error) {
      console.error("Error:", error)
     }   
    };

    fetchData();
  }, []);

  return (
    <div className="wellness-page">
      {/* Your component JSX */}
      <h1>Health Conditions Data</h1>
      {/* You can add more code here to display the fetched data */}
    </div>
  );
};

export default WellnessPage;
