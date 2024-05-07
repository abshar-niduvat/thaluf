import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    debugger
    const storedDetails = JSON.parse(localStorage.getItem('selectedItem')); 
    if (storedDetails) {
      setItemDetails(storedDetails);
      console.log(itemDetails);
      debugger
    } 
  }, []);

  return (
    <div>
        <h1>University Details Page</h1>
        <table className="data-table" style={{display:'flex', justifyContent:'center'}}>
            <tbody>
      {itemDetails ? (
        <>
        <tr>
          <th className="alignItemRight" >Name :</th>
          <td>{itemDetails.name}</td>
        </tr>
        <tr>
          <th className="alignItemRight" >Domains :</th>
          <td>{itemDetails.domains}</td>
        </tr>
        <tr>
          <th className="alignItemRight" >Country :</th>
          <td>{itemDetails.country}</td>
        </tr>
        <tr>
          <th className="alignItemRight" >Alpha Code :</th>
          <td>{itemDetails.alpha_two_code}</td>
        </tr>
        <tr>
          <th className="alignItemRight" >Webpages :</th>
          <td>{itemDetails.web_pages}</td>
        </tr>
        
        </>
      ) : (
        <tr>
        <p>University details not found.</p>
        </tr>
      )}
      </tbody>
      </table>
      <div>
      </div>
    </div>
  );
}

export default DetailsPage;
