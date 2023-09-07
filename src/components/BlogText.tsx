import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";

//style
const useStyles = makeStyles((theme) =>  ({

    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        lineHeight: '1.75',
        display: 'inline',
    },
    a: {
        color: '#38fc94',
        textDecoration: "none",
    },
}));
interface prop {
    text: string;
    hasUrl: boolean;
    url?: string;
}

function BlogText(props:prop) {
    const classes = useStyles();

    return (    
        <sub className={classes.h3}>
            {
                props.hasUrl ? (
                    <a href={props.url} target="_blank" className={classes.a} rel="noreferrer"> {props.text} </a>
                ) : (
                    props.text
                )
            }
        </sub>   
    )
}

export default BlogText;
