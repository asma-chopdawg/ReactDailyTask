import React from 'react'
import {   FormControl, FormControlLabel, FormLabel,  Radio, RadioGroup } from '@material-ui/core'


const CommonRadio = ({value,onChange}) => {
    return (
        <>
             <FormControl >
                <FormLabel>Notes</FormLabel>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    value={value}
                    onChange={onChange}
                >
                    <FormControlLabel value="Reminder" control={<Radio />} label="Reminder" />
                    <FormControlLabel value="To do" control={<Radio />} label="To do" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default CommonRadio
