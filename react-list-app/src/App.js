import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import DetailsPage from './views/DetailsPage';
import { fetchListItem, getData } from './models/Data';


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const cachedData = getData();
        if (cachedData) {
          setItems(cachedData);
        } else {
          const fetchedData = await fetchListItem();
          setItems(fetchedData);
        }
      } catch (error) {
        console.error(error.message);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);
  

  return (
    <Router>
      {isLoading ? (
        <div>Loading items...</div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage items={items}  />} />
          <Route path="/details/:itemId" element={<DetailsPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;