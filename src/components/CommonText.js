import { Typography,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        // display:'flex',
        // height:'7rem',
        // borderWidth:1,
        // borderStyle:"dotted",
        // borderColor:"#000000",
        // justifyContent:'space-around',
        // alignItems:'center',
        // marginBottom:10,
    wordWrap:'break-word',
    textAlign:"center"
    },
  });


const CommonText = ({variant,color,align,text}) => {
    const classes = useStyles();
    return (
        <>
            <Typography 
                variant={variant}
                color={color}
                // align={align}
                className={classes.root}
               
                >
                   {text}
            </Typography>
        </>
    )
}

export default CommonText
