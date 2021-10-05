import React from 'react'
import { TextField } from '@material-ui/core';

const CommonInput = (props) => {
    // destructuring
    const {placeholder,value,onChange}=props 
    return (
      <>
      <TextField  
            placeholder={placeholder} 
            onChange={onChange} 
            value={value}
            fullWidth
       />
     
</>
    )
}

export default CommonInput

// import React from 'react'
// import { TextField } from '@material-ui/core';
// // props
// const CommonInput = ({placeholder,value,onChange}) => {
//     return (
//       <TextField  
//             placeholder={placeholder} 
//             onChange={onChange} 
//             value={value}
//             fullWidth
//        />
//     )
// }
// export default CommonInput
