import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    viewAllListingsContainer: {
      width: '80%',
      margin: '20px auto',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignContent: "center"
    },
    viewAllListingsLoading: {
      margin: "100px auto",
      fontSize: "7rem"
    }, 
    viewAlllistingsHeading: {
      width: '100%',
      marginBottom: "50px",
      padding: '20px 0',
      fontSize: '5rem'
    },
    viewAllListingsCard: {
      width: "25%",
      margin: "20px 10px",
      padding: "20px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignContent: "center", 
      borderRadius: "5px"
    },
    viewAllListingsCardHeader: {
      width: "100%",
      margin: "10px 0",
      padding: " 0",
      fontSize: "2rem"
    },
    veiwAllListingsCardContent:{
      width: "100%",
      margin: "10px 0"
    }
  });


  export default useStyles;