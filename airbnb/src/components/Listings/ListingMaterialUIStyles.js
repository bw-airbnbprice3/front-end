import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    viewAllListingsContainer: {
      width: '80%',
      margin: '20px auto',
      display: 'flex',
      flexFlow: 'row wrap',
      border: '1px solid black'
    },
    viewAlllistingsHeading: {
      width: '100%',
      padding: '20px 0',
      fontSize: '5rem'
    }
  });


  export default useStyles;