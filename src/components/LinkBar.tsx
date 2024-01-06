
import './Bar.css';
import PDF from '../pdf/stevenbairesume.pdf'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope} from 'react-icons/fa'
import { FaPaperclip } from 'react-icons/fa';
import { makeStyles, ButtonBase} from "@material-ui/core";
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
    box:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "20px",
        backgroundColor: "#141b2d",
        marginTop: "100px",
        height: "120px",
        width: "100%",
    },
    icon:{
        color: "white",
        height: "27px",
        width: "auto",

        '&:hover' :{
            color : "#111",
        },
    },
    bar: {
        display: "flex",
        flexDirection: "row",
        width: "150px",
        justifyContent: "space-around",
    },
    btnBase: {
        borderRadius: "50%",
        width: "27px",
        height: "27px",        
        marginLeft: "5px",
        marginRight: "5px",
    }




}));
const LinkBar = () =>{
    const classes = useStyles();
    return(

        <div className = {classes.box}>


            <div className = {classes.bar}>
                <ButtonBase href = "https://github.com/stevenbai0724/personal-website" target = "_blank" className = {classes.btnBase}><FaGithub className = {classes.icon} /></ButtonBase>
                <ButtonBase href = "https://www.linkedin.com/in/steven-bai-787515210" target = "_blank" className = {classes.btnBase}><FaLinkedin className = {classes.icon} /></ButtonBase>
                <ButtonBase href = "mailto:stevenbai0724@gmail.com" target = "_blank" className = {classes.btnBase}><FaEnvelope className = {classes.icon} /></ButtonBase>
                <ButtonBase href = {PDF} target = "_blank" className = {classes.btnBase}><FaPaperclip className = {classes.icon} /></ButtonBase>

            </div>

            <h5 style = {{color: "white"}}>&copy; 2021-2024 Steven Bai</h5>

        </div>
   
    )
}



export default LinkBar;