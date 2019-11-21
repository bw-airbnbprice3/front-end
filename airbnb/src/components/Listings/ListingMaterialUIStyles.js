import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    viewAllListingsContainer: {
      width: '80%',
      margin: '20px auto',
      padding: "0 30px",
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignContent: "center"
    }, 
    viewAlllistingsHeading: {
      width: "100%",
      marginBottom: "30px",
      padding: "20px 0"
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
      margin: "10px 0",
      padding: " 0",
      fontSize: "2rem"
    },
    viewAllListingsCardMedia: {
      border: "1px solid blue"
    },
    veiwAllListingsCardContent:{
      width: "100%",
      margin: "10px 0"
    }
  });


  export default useStyles;