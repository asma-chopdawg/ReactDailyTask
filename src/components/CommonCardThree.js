import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import img from '../assets/img.jpeg'

const useStyles = makeStyles({
    
    container: {
        height:'3rem',
        width:'15rem',
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'skyblue',
        padding:5,
        borderRadius:6,
        display:'flex',
        backgroundColor:'skyblue'
    },
    img:{
        flex:0.2,
        // borderWidth:2,
        // borderStyle:'solid',
        // borderColor:'green',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
   content:{
        flex:0.6,
        // borderWidth:2,
        // borderStyle:'solid',
        // borderColor:'red',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center'


    },
    numbers:{
        flex:0.2,
        // borderWidth:2,
        // borderStyle:'solid',
        // borderColor:'purple',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
   imgStyle:{
        height:'1.5rem',
        width:'1.5rem',
        borderRadius:'1.5rem',
   },
   text1:{
    fontSize:10
   },
   text2:{
    fontSize:10,
    fontWeight:'bold'
   },
   num:{
       height:'1rem',
       width:'1rem',
       borderRadius:'1rem',
       backgroundColor:'pink',
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
   }
    
    
  });

const CommonCardThree = () => {
    const classes= useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={img} className={classes.imgStyle}/>
            </div>
            <div className={classes.content}>
                <Typography  variant={"body2"} className={classes.text1}>Dina Mayer</Typography>
                <Typography  variant={"caption"} className={classes.text2}>Welcome to yoga meetup</Typography>
            </div>
            <div className={classes.numbers}>
                <Typography variant="body2" className={classes.text1}>9 hrs</Typography>
                <div className={classes.num}>
                    <Typography variant={"caption"} className={classes.text1}>5</Typography>
                </div>
            </div>
        </div>
    )
}

export default CommonCardThree
