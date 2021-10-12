import React from 'react'
import { TextField ,makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        marginBottom:20
    },
  });

const CommonInput = ({variant,label,placeholder,value,onChange}) => {
    const classes = useStyles();
    // destructuring
    // const {variant,label,placeholder,value,onChange}=props 
    // const {variant,label,placeholder,value,onChange}=props
    return (
      <>
        <TextField 
                variant={variant}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                fullWidth
                className={classes.root}
            />
     
      </>
    )
}

export default CommonInput


