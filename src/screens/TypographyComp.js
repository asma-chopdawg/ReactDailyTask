import { Typography ,makeStyles,Button, TextField} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    bg: {
      backgroundColor: 'red',
      color:'#fff'
    },
  });

const TypographyComp = () => {

    const classes = useStyles();

    return (
        <div>
        <Typography component="h2" variant="h1" gutterBottom className={classes.bg}>
          h1. Heading
        </Typography>
         <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Button variant="contained" color={'primary'} >
        Default
      </Button>
        <Button variant="text" color={'primary'} >
        Default
      </Button>
      </div>
    )
}

export default TypographyComp
