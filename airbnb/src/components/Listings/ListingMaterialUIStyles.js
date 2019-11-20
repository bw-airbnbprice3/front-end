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
      margin: "0 10px",
      padding: "20px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignContent: "center", 
      border: "1px solid #eee",
      borderRadius: "5px"
    },
    viewAllListingsCardHeaderLink: {
      width: "100%"
    },
    viewAllListingsCardHeader: {
      width: "100%",
      margin: "10px 0",
      padding: " 0"
    },
    veiwAllListingsCardContent:{
      width: "100%",
      margin: "10px 0"
    }
  });


  export default useStyles;