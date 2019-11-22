import React from 'react';
import {Typography} from '@material-ui/core';
import {neighborhoods, neighborhoodGroups} from '../../utils/DataFiles';


const ListingNeighborHood = props => {
  const {listing, classes} = props;
 
  return (
    <div>
      {
        neighborhoods.map((neighborhood, idx) => {
          if (neighborhood.value === listing.neighborhood) {
            return <Typography variant="body1" key={idx} className={classes}>{neighborhood.label}</Typography>
          }
        })
      }
    </div>
  )
};

const ListingNeighborHoodGroup = props => {
  const {listing, classes} = props;
  console.log(listing)
  return (
    <div>
      {
        neighborhoodGroups.map((county, idx) => {
          if (county.value === listing.neighborhood_group) {
          
          return <Typography variant="subtitle1" key={idx} className={classes}>{county.label}</Typography>
          }
        })
      }
    </div>
  )
};

export {
  ListingNeighborHood,
  ListingNeighborHoodGroup
};

