import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = () => {
  const [listings, setListings] = useState([]);
  // Grabs all of the listings that are available from the data end points.
  useEffect(() => {
    AxiosWithAuth().get('api/listings/').then(response => {
      console.log(response.data);
      setListings(response.data);
    
    })
      .catch(error => console.log(error));
   
  }, []);
  // Need to map over all of the listings here
  return (
    <div>
      <h1>Listings</h1>
      <div className="allListings">

        {/* map listings here; sample card below */}
        <div className="listingCard">
          <h3>Property Name</h3>
          <p>Location</p>
          {/* <Link to="/listing/id">View Listing</Link> */}
        </div>

      </div>
    </div>

  );
};

export default ViewAllListings;