import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    viewAllListingsContainer: {
      width: "80%",
      margin: "20px auto",
      padding: "0 30px",
      display: 'flex',
      flexFlow: "row wrap",
      justifyContent: "center",
      alignContent: "center"
    }, 
    viewAlllistingsHeading: {
      width: "100%",
      marginBottom: "30px",
      padding: "20px 0",
      fontSize: "3.5rem"
    },
    viewAllListingsCardBox: {
      width: "80%",
      display: "flex",
      flexFlow: "row wrap",
      alignContent: "center"
    },
    viewAllListingsCard: {
      width: "25%",
      margin: "20px 24px",
      padding: "20px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center", 
      borderRadius: "5px"
    },
    viewAllListingsCardHeader: {
      width: "100%",
      height: "100px",
      margin: " 0 0 10px 0",
      padding: " 0",
      fontSize: "5rem",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    viewAllListingsCardMedia: {
      width: "100%",
      height: "200px"
    },
    veiwAllListingsCardContent:{
      width: "100%",
      margin: "10px 0"
    },
    neighborhoodGroup: {
      width: "100%"
    },
    neighborhood: {
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  });


  export default useStyles;