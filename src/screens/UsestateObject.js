import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import { CommonButton } from '../components/CommonButton'
import CommonInput from '../components/CommonInput'

const UsestateObject = () => {
    const [name, setName] = useState({
        firstName:"",
        lastName:"",
        email:""
      })
    
      const _submit=()=>{
        // console.log(name.firstName,name.lastName,name.email)
      }
    return (
     <Container>
      <CommonInput placeholder="First Name" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
      <CommonInput placeholder="Last Name" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} />
      <CommonInput placeholder="Email" value={name.email} onChange={(e)=>setName({...name,email:e.target.value})} />
      <CommonButton button={'Login'} onClick={_submit} />
      <h1>{name.firstName}</h1>
    </Container>
    )
}

export default UsestateObject
