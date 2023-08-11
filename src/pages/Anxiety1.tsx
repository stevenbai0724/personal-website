import react, { useImperativeHandle } from 'react'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    h1: {
        textAlign: 'left',
        fontSize: "30pt",
        marginTop: "80px",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
    },
    h2Title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        lineHeight: '1.75',
        display: 'inline',
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        marginTop: "40px",
        marginBottom: "40px",
        borderRadius: "15px",
    },
    a: {
        color: '#38fc94',
        textDecoration: "none",
    },
    divFill: {
        height: 'calc(100vh)',
        
    },
    video: {
        position: "relative",
        width: "100%",
        backgroundColor: "red",
        paddingTop: "56.25%",
    },
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
    },
}))


const Anxiety1 = () => {
    const classes = useStyles();


    return (
        <div>
            <h1 className={classes.h1}>Anxiety and Self Improvement (part 1) </h1>
        </div>
    )
}



export default Anxiety1;