import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import DMOJSTATS from '../images/dmojstats.png'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonBase from '@mui/material/ButtonBase';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link';
//style
const useStyles = makeStyles((theme) =>  ({

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: "30pt",
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '15pt',
        color: 'white',
    },

    card: {
        width: "325px",
        height: "325px",
        backgroundColor: "#394680",
        opacity: "0.8",

        '&:hover' : {
            transform: "scale(1.01)",
            opacity: "1.0",
        }
    },
    top: {
        height: "80%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    bottom: {
        height: "20%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1f2940",
    },
    img: {
        height: "85%",
    },
    icon: {
        height: "35px",
        width: "35px",
        borderRadius: "50%",
        opacity: "0.7",
        margin: "5px",

        '&:hover' : {
            opacity: "1.0"
        }
    },
    techBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30px",
        width: "100%",
        marginTop: "-10px",
        marginBottom: "10px",
        flexWrap: "wrap",
    },
    textBox:{
        width: "95%",
        margin: "auto",
    },
    text: {
        fontSize: "12pt",
        color: "white",
        fontWeight: "normal",
        textAlign: "left",
        lineHeight: "1.75",

    },
    demo: {
        width: "95%",
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
        maxHeight: "calc(100vh - 100px)",
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
    '@media only screen and (max-width: 700px)': {

        card :{
            width: "80vw",
            height: "80vw",
        }

    },

}));
interface card{
    thumbnail: any;
    title: string;
    description: string;
    links: any;
    tech: any;
    demo: any;
}
const style = {
    height: "30px",
    borderRadius: "20px",
    fontSize: "12pt",
    backgroundColor: "#007bff",
    paddingLeft: 5,
    paddingRight: 5,
    color: "white",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "2px",
    
}
const close = {
    position: "absolute",
    right: "5px",
    top: "5px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#354070",
} as React.CSSProperties;

function ProjectCard(props:card) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return (
        <div>
        <ButtonBase onClick={handleOpen}>
            <div className = {classes.card}>

                <div className = {classes.top}>
                    <img className = {classes.img} src = {props.thumbnail}></img>
                </div>

                <div className = {classes.bottom}>
                    <h1 className = {classes.subTitle}> {props.title}</h1>
                </div>    

            </div>
        
        </ButtonBase>
        <Modal open={open} onClose={handleClose} >
            <div className = {classes.modal}>
                
                
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

                </div>


            </div>
            
            
        </Modal>

        </div>
    )
}

export default ProjectCard
