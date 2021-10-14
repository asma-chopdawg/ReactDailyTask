import {  Container, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { CommonButton } from '../components/CommonButton';
import CommonInput from '../components/CommonInput'
import CommonRadio from '../components/CommonRadio';
import CommonText from '../components/CommonText';

const Notes = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [radio, setRadio] = useState('Reminder')


    return (
       <Container>
           <CommonText 
                text={'Note taking App'}
                variant="h4"
                color="secondary"
                align="center"
           />
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
            <Grid container spacing={2}>
            <Grid item md={5} >
                <CommonText 
                    text="content1"
                    variant="h4"
                    color="secondary"
                    align="center"
            />
            </Grid>

            <Grid item  md={5}>
                <CommonText 
                    text="content2"
                    variant="h4"
                    color="secondary"
                    align="center"
                />
            </Grid>
            
            </Grid>
       </Container>
    )
}

export default Notes
