import { Button, Container ,TextField, Typography} from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Notes from './screens/Notes';
import PostData from './screens/PostData';
import TypographyComp from './screens/TypographyComp';
import UsestateObject from './screens/UsestateObject';

function App() {
  // const [firstName, setFirstName] = useState('Saiora')
  // const [lastName, setLastName] = useState('werty')
  // const [email, setEmail] = useState('wertyui@dfgh')

  // const [data, setData] = useState('')

  // const _submit=()=>{
  //   setData(`${firstName} ${lastName} ${email}`)
  // }
  const inputRef=useRef(null)

// useEffect(() => {
//   inputRef.current.focus()
// }, [])


const _focus=()=>{
  inputRef.current.focus()
}
  return (
    <>
    {/* git */}
      {/* <UsestateObject/>
      <PostData/>
      <input ref={inputRef} />
      <Button onClick={_focus}>
        Focus
      </Button>
      <TypographyComp/> */}
      <Notes/>
    </>
  );
}

export default App;
