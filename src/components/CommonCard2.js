import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import img from '../assets/img.jpeg'
const useStyles = makeStyles({
    
    container: {
        height:'20rem',
        width:'20rem',
        borderWidth:2,
        borderStyle:'dotted',
        borderColor:'red',
        padding:5,
    },
    headerParent:{
        display:'flex',
        flex:0.2,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'pink',
        flexDirection:'row'
    },
    
    contentParent:{
        flex:0.6,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'blue'
    },
    footerParent:{
        flex:0.2,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'yellow',
        display:'flex',
        justifyContent:'space-between'
    },

    // headerChilds
    image:{
        flex:0.2,
        display:'flex',
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    headerContent:{
        flex:0.6,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'green',
        paddingLeft:2,
    },
    icon:{
        display:'flex',
        flex:0.2,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'green',
        justifyContent:"center",
        alignItems:'center'
    },

    // contentChild

    contentImage:{
        display:'flex',
        flex:0.2
    },
    contentText:{
        display:'flex',
        flex:0.4,
        padding:6,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'green',
    },
    // footer
    heartShare:{
        display:'flex',
        flex:0.4,
        borderWidth:1,
        borderStyle:"dotted",
        borderColor:"#000000",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

    downArrow:{
        flex:0.2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }

  });


const CommonCard2 = () => {
    const classes=useStyles()
    return (
       
        <div className={classes.container}>
            {/* header */}
            <div className={classes.headerParent}>
                <div className={classes.image}>
                    <Typography>Image</Typography>
                </div>
                <div className={classes.headerContent}>
                    <Typography>title </Typography>
                    <Typography>description</Typography>
                </div>
                <div className={classes.icon}>
                <Typography>icon</Typography>

                </div>
            </div>

            {/* Content */}

            <div className={classes.contentParent}>
                <div className={classes.contentImage}>
                    <img src={img} style={{width:'100%'}}/>
                </div>
                <div className={classes.contentText}>
                    <Typography>This imp pralel ewrtyuihgfd klhgf rytfg</Typography>
                </div>
            </div>

            {/* footer */}

            <div className={classes.footerParent}>
                <div className={classes.heartShare}>
                    <Typography>heart</Typography>
                    <Typography>share</Typography>
                </div>
                <div className={classes.downArrow}>
                    <Typography>DownArrow</Typography>
                </div>
            </div>
        </div>
    )
}

export default CommonCard2
