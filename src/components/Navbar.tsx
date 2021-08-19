import {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles} from "@material-ui/core";

import './Bar.css';
import React from 'react';
import { classicNameResolver } from 'typescript';

const useStyles = makeStyles((theme) =>  ({

    li: {
        '&:active' : {
            backgroundColor: "red",
        }
    },

    

}));

const Navbar = () =>{

    const classes = useStyles();
    return(

        
        <ul className = "nav">
        
            <li 
                
            >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/Projects">Projects</Link>
            </li>
            <li >
                <Link to="/Blogs">Blogs</Link>
            </li>

        </ul>
    )
}





export default Navbar;