import React from 'react'
import { Button, TextField } from '@material-ui/core'
import '../styles/newsletter.css'
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: "25ch"
//       }
//     },
//     textField: {
//       border: "1px solid white"
//     }
//   }));
function Newsletter(props) {
    // const classes = useStyles();


    return (
        <div>
            <form className = "container__newsletter">
                <span>Sign up for offers & news</span>
                <label>Mail</label>
                <TextField />
                <ArrowRightIcon style={{ color: '#f5f5f5' }}/>
                <p>Yes/No</p>
            </form>
        </div>
    )
}

export default Newsletter
