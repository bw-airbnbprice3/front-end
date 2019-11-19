import React, {useEffect} from "react";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = () => {

  // Grabs all of the listings that are available from the data end points.
  useEffect(() => {
    AxiosWithAuth().get('api/listings/').then(response => console.log(response)).catch(error => console.log(error));
  }, []);

  // Need to map over all of the listings here
  return <h1>From View All Listings</h1>;
};

export default ViewAllListings;