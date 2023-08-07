import React, {useEffect, useState} from 'react';
import { makeStyles, ButtonBase} from "@material-ui/core";
import richmedia from "../images/richmedia.png"
//style
const useStyles = makeStyles((theme) =>  ({

    projectName: {
        textAlign: 'left',
        fontSize: '15pt',
        color: 'white',
        backgroundColor: '#2E8B57',
        display: "inline",
        marginRight: "5px",
    },
    experienceName: {
        textAlign: 'left',
        fontSize: '15pt',
        color: 'white',
        backgroundColor: '#9966CC',
        display: "inline",
        lineHeight: "1.75",
    },
    projectDescription: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        color: 'white', 
        lineHeight: "1.65",
    },
    cardContainer: {    
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "10px",
        justifyContent: "center",

    },
    icon: {
        height: "30px",
        width: "30px",
        display: "inline",
        verticalAlign: "middle",
        marginLeft: "5px",
        marginRight: "5px",
        borderRadius: "50%"
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: "100px",
    },
    nameContainer: {
        display: "flex",
        width: "150px",
        flexDirection: "row",
        alignItems: "center",
        textDecoration: "none",
        height: "100%",
        marginRight: "15px",

        '&:hover' : {
            transform: "scale(1.01)",
        }
    },
    textContainer: {
        display: "flex",
        flex: 1,
    },

    '@media only screen and (max-width: 1100px)': {
        container:{
            flexDirection: "column",
            alignItems: "left",
        },
        nameContainer: {
            width: "97%",
        },
        textContainer: {
            width: "100%",
        }
    },
}));
interface card {
    title: string;
    hasImg: boolean;
    img?: any;
    imgAlt?: string;
    description: string;
    link: string;
}

function ExperiencePoint(props:card) {
    const classes = useStyles();

    return (    
        <div className={classes.container}>

            <a className={classes.nameContainer} href={props.link} target="_blank" rel="noreferrer">
                {
                    props.hasImg && <img src={props.img} className = {classes.icon} alt={props.imgAlt}></img>
                }        
                <div className = {classes.experienceName}> {props.title} </div>
            </a>
        
            <div className={classes.textContainer}>
                <p className={classes.projectDescription}>
                    {props.description}
                </p>
            </div>

        </div>
    )
}

export default ExperiencePoint;
