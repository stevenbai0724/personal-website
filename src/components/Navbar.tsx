import { HashLink as Link } from 'react-router-hash-link';
import PDF from '../pdf/stevenbairesume.pdf'
import React from 'react';
import {makeStyles} from "@material-ui/core";
import { AiOutlineHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import {RiFilePaper2Line} from "react-icons/ri";
import {BsPen} from "react-icons/bs";


const useStyles = makeStyles((theme) =>  ({

    nav: {
        listStyleType: "none",
        display: "inlineBlock",
        textAlign: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
    },
    li: {
        backgroundColor: "#333",
        textAlign: "center",
        textDecoration: "none",
        float: "left",
        fontSize: "18px",
        '&:hover' :{
            backgroundColor : "#111",
        },

    },
    link: {
        display: "flex",
        alignItems: "center",
    }

}));
const Navbar = () =>{
    const classes = useStyles();
    return(

        
        <ul className = {classes.nav}>
        
            <li className = {classes.li}>
                <Link className = {classes.link} to="/#top">Home</Link>
                
            </li>
            <li className = {classes.li}>
                <Link className = {classes.link} to="/Projects#top">Projects</Link>
            </li>
            <li className = {classes.li}>
                <Link className = {classes.link} to="/Blogs#top">Blogs</Link>
            </li>
            <li className = {classes.li}>
                <a className = {classes.link} href = {PDF} target = "_blank">Resume</a>
            </li>

        </ul>
    )
}





export default Navbar;