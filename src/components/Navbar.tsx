import { HashLink as Link } from 'react-router-hash-link';
import PDF from '../pdf/stevenbairesume.pdf'
import {makeStyles} from "@material-ui/core";
import { AiOutlineHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import {RiFilePaper2Line} from "react-icons/ri";
import {BsPen} from "react-icons/bs";
import React, {useEffect, useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//height and width measurements
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };

}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

const useStyles = makeStyles((theme) =>  ({

    nav: {
        listStyleType: "none",
        display: "inlineBlock",
        textAlign: "center",
        margin: "0",
        padding: "0",
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
    },
    btn: {
        color: "lightblue",
        height: "40px",
        border: "1px solid rgba(169, 169, 169, .3);", 
        borderOpacity: "0.5",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#333333",
        position: "fixed",
        top: "0",
    },
    icon: {
        borderRadius: "10%",
    },
    menuItem:{
        width: "100%", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-start",
    },
    menu: {
        "& .MuiMenu-paper": {
            backgroundColor: "#333333",
            width: "120px",
        },

        "& .MuiMenu-list": {
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            color: "white",
        }
    },

    '@media only screen and (max-width: 500px)': {
        container: {
            justifyContent: "flex-start",
        },
        li: {
            fontSize: "16px",
        },
    }
    
}));
interface barContent{
    first: string;
    second: string;
    third: string;
    fourth: string;
}
function Navbar(props:barContent) {
    const classes = useStyles();
    const {height, width} = useWindowDimensions();
    const history = useHistory();
    const navHome = useCallback(() => history.push("/#top"), [history]);
    const navProjects = useCallback(() => history.push("/Projects#top"), [history]);
    const navBlogs= useCallback(() => history.push("/Blogs#top"), [history]);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleHome = () => {
        setAnchorEl(null);
        navHome();
    }
    const handleProjects = () => {
        setAnchorEl(null);
        navProjects();
    }
    const handleBlogs = () => {
        setAnchorEl(null);
        navBlogs();
    }

    return(

        <div className={classes.container} style = {styles}>

            {
                width > 500 && 
                <ul className = {classes.nav}>
            
                <li className = {classes.li}>
                    <Link className = {classes.link} to="/#top">{props.first}</Link>
                    
                </li>
                <li className = {classes.li}>
                    <Link className = {classes.link} to="/Projects#top">{props.second}</Link>
                </li>
                <li className = {classes.li}>
                    <Link className = {classes.link} to="/Blogs#top">{props.third}</Link>
                </li>
                <li className = {classes.li}>
                    <a className = {classes.link} href = {PDF} target = "_blank">{props.fourth}</a>
                </li>

            </ul>
            }
            {
                width <= 500 &&
                <div >
                    <div >
                        <Button
                            onClick={handleClick}
                            className = {classes.btn}
                        >
                            <MenuIcon className = {classes.icon}/>
                        </Button>
                    </div>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className = {classes.menu}
                    >
                        <li className = {classes.li}>
                            <Link onClick = {handleClose} className = {classes.link} to="/#top">{props.first}</Link>
                    
                        </li>
                        <li className = {classes.li}>
                            <Link onClick = {handleClose} className = {classes.link} to="/Projects#top">{props.second}</Link>
                        </li>
                        <li className = {classes.li}>
                            <Link onClick = {handleClose} className = {classes.link} to="/Blogs#top">{props.third}</Link>
                        </li>
                        <li className = {classes.li}>
                            <a onClick = {handleClose} className = {classes.link} href = {PDF} target = "_blank">{props.fourth}</a>
                        </li>

                    </Menu>
                </div>
            }

        </div>
    )
}

const styles: React.CSSProperties = {
    zIndex: 99,
}



export default Navbar;

