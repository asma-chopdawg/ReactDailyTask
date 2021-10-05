import { Button } from '@material-ui/core'
import React from 'react'

export const CommonButton = (props) => {
    const {button,onClick}=props
    return (
       <Button variant="outlined" onClick={onClick} style={{marginTop:10}}>
           {button}
        </Button>
    )
}
