import {  Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { CommonButton } from '../components/CommonButton';
import CommonInput from '../components/CommonInput'
import CommonRadio from '../components/CommonRadio';

const Notes = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [radio, setRadio] = useState('Reminder')


    return (
       <Container>
           <Typography 
                variant="h6"
                color="primary"
                gutterBottom
                align={'center'}
                >
                    Note Taking App
            </Typography>
           <CommonInput
                variant={"outlined"}
                placeholder={'Title'}
                label={'Title'}
                value={title}
                onChange={()=>{''}}
           />
           <CommonInput
                variant={"outlined"}
                placeholder={'Description'}
                label={'Description'}
                value={'Description'}
                onChange={()=>{''}}
           />
            <CommonRadio value={radio} onChange={(e)=>setRadio(e.target.value)}/>
            <div>
                <CommonButton button={'Submit'} />
            </div>
       </Container>
    )
}

export default Notes
