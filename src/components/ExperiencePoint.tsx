import React, {useEffect, useState} from 'react';
import { makeStyles, ButtonBase} from "@material-ui/core";
import richmedia from "../images/richmedia.png"
import Modal from "@mui/material/Modal";
//style
const useStyles = makeStyles((theme) =>  ({

    experienceName: {
        textAlign: 'left',
        fontSize: '15pt',
        color: 'white',
        display: "inline",
        lineHeight: "1.75",
        paddingLeft: "5px",
        paddingRight: "5px",
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
        backgroundColor: '#9966CC',

        '&:hover' : {
            transform: "scale(1.01)",
            cursor: "pointer",
        }
    },
    textContainer: {
        display: "flex",
        flex: 1,
    },
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#20293d",
        width: "450px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "10px",
        maxWidth: "80vw",
        textAlign: "center",
        overflowY: "auto",
        maxHeight: "calc(100vh - 200px)",
        '&::-webkit-scrollbar' :{
            width: '4px',

          },
          '&::-webkit-scrollbar-thumb' :{
            backgroundColor: "#333333",
            borderRadius: "7px",
        
          },
          '&::-webkit-scrollbar-track' :{
            borderRadius: "4px",
            display: "none",
          },
    },

    '@media only screen and (max-width: 1100px)': {
        container:{
            flexDirection: "column",
            alignItems: "left",
        },
        nameContainer: {
            width: "100%",
            marginRight: "0px",
            backgroundColor: "#282c34",
        },
        experienceName: {
            backgroundColor: "#9966CC",
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
    link: string | undefined;
}

function ExperiencePoint(props:card) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (    
        <div className={classes.container}>

            <a className={classes.nameContainer}  href={props.link} target="_blank" rel="noreferrer">
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

            <Modal open={open} onClose={handleClose} >
            
                <div className = {classes.modal}>
                    
    {/*                 
                    <ButtonBase onClick = {handleClose} style = {close}>
                        <CloseIcon style = {{width: "100%", height: "100%", color: "white"}}></CloseIcon>
                    </ButtonBase>
                    

                    <h1 className={classes.subTitle}>{props.title}</h1>

                    <div className = {classes.techBar}>
                        {props.tech.map((item:any) => (
                            <ButtonBase style = {style}>
                                {item}
                            </ButtonBase>
                        ))}
                        
                        
                    </div>  
                        
                    <img className = {classes.demo} src = {props.demo}></img>
                    
                    <div className = {classes.textBox}>
                        <h5 className= {classes.text}>{props.description}</h5>
                    </div>
                    

                    <div className = {classes.techBar}>      

                        {props.links.map((item:any) => (
                            <a target = "_blank" href = {item.url}><img className = {classes.icon} src = {item.icon}></img></a>
                        ))}

                    </div> */}

                
                </div>
            
            
        </Modal>

        </div>
    )
}

export default ExperiencePoint;
