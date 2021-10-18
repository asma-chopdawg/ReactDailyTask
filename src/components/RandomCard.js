import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import img from '../assets/img.jpeg'
const useStyles = makeStyles({
    
    container: {
        height:'8rem',
        width:'15rem',
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'skyblue',
        padding:5,
        borderRadius:6
    },
    mic:{
        flex:0.2,
        // borderWidth:2,
        // borderStyle:'dotted',
        // borderColor:'green',
        padding:5,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    img:{
        flex:0.6,
        // borderWidth:2,
        // borderStyle:'dotted',
        // borderColor:'pink',
        padding:5,
        flexDirection:'row',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        flex:0.2,
        // borderWidth:2,
        // borderStyle:'dotted',
        // borderColor:'blue',
    },
    round:{
        height:'1.5rem',
        width:'1.5rem',
        borderRadius:'1.5rem',
        borderWidth:2,
        borderStyle:'dotted',
        borderColor:'red',
    },
    imgStyle:{
        height:'3.4rem',
        width:'3.4rem',
        borderRadius:'3.4rem',
    }
    
  });
export const RandomCard = () => {
    const classes= useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.mic}>
                <div className={classes.round}>
                </div>
            </div>
            <div className={classes.img}>
               <img src={img} className={classes.imgStyle}/> 
            </div>
            <div className={classes.text}>
                <Typography variant={'body2'}>Saira Hafeez</Typography>
            </div>
        </div>
    )
}
