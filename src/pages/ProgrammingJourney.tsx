import React from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>  ({

    
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
    },
    h1: {
        textAlign: "center",
    },

    h2: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '25px',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '1.5',
    },

    
    '@media only screen and (max-width: 600px)': {
    
        img: {
            width: "100%",
        },

    }
      


}));
const ProgrammingJourney = () =>{
    const classes = useStyles();

    return (

    <div>
        <h1 className = {classes.h1}>My Programming Journey</h1>

        <img className = {classes.img} src={line} alt="line"></img>


        Coming soon!
    </div>


    )

}

export default ProgrammingJourney;