import { Grid } from '@material-ui/core'
import React from 'react'
import CommonCard2 from './CommonCard2'
import CommonCardThree from './CommonCardThree'
import { RandomCard } from './RandomCard'

const GridComp = () => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={8} md={6} sm={12} xs={12}  style={{borderWidth:3,borderStyle:'solid',borderColor:'red'}}>
                <RandomCard/>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12} style={{borderWidth:3,borderStyle:'solid',borderColor:'green'}}>
                <CommonCardThree/>
            </Grid>
       </Grid>
    )
}

export default GridComp
