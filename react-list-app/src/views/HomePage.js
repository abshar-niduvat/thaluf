import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ items }) {
  const [sortedData, setSortedData] = useState(items);
  const [toggleSort,setToggleSort] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleClick = (itemId) => {
    localStorage.setItem('selectedItem', JSON.stringify(items.find((item) => item.name === itemId)));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredList = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm) 
    );
    setSortedData(filteredList);
  }, [searchTerm, items]);

  const handleSort = () => {
    if(!toggleSort){
    const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setToggleSort(!toggleSort);
    setSortedData(sorted);
    }
    else{
      const sorted = [...items].sort((a, b) => b.name.localeCompare(a.name));
      setToggleSort(!toggleSort);
      setSortedData(sorted);
    }
  };

  const handleDeleteItem = (itemId) => {
    document.getElementById(itemId)?.classList.add('item');
    setTimeout(() => {
    const newItems = sortedData.filter((item) => item.name !== itemId);
    setSortedData(newItems);
    localStorage.removeItem('universities');
    localStorage.setItem('universities', JSON.stringify(newItems));
    }, 500);
   
    };

  return (
    <div>
      <h1>Universities List</h1>
      <input type="text" id="search-input" placeholder="Search University..." value={searchTerm} onChange={handleSearchChange} />
      <table className="data-table">
      <thead>
      <tr>
        <th>Name <button type="button" style={{float:'right'}} onClick={handleSort}>sort</button></th>
        <th>Country</th>
        <th>Website</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {sortedData.length > 0 ? (
        <>
        {sortedData.map((item) => (
          <tr key={item.name} id={item.name}>
            <td>
              {item.name}
            </td>
            <td>
              {item.country}
            </td>
            <td>
              {item.web_pages}
            </td>
            <td>
              <button type='button'>
              <Link to={`/details/${item.name}`} style={{color:'white'}} onClick={() => handleClick(item.name) }>Get Details</Link>
              </button>
              <button  type='button' style={{margin:'5px'}} onClick={() => handleDeleteItem(item.name)}>
                Delete
              </button>
              </td>
              </tr>
            ))}
            </>
      ) : (
        <tr><td colSpan={3} style={{textAlign:'center'}}>
        <p>No items found.</p>
        </td></tr>

      )}
      </tbody>
      </table>
    </div>
  );
}

export default HomePage;