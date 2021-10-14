import { Typography } from '@material-ui/core'
import React from 'react'
import CommonText from './CommonText'

const CommonCard = () => {
    return (
        <div style={{ 
            height:'20rem',
            width:'20rem',
            borderWidth:3,
            borderStyle:"dotted",
            borderColor:"#000000",
            marginTop:10
    }}>


       <div style={{
           display:'flex',
            height:'4rem',
            borderWidth:1,
            borderStyle:"dotted",
            borderColor:"#000000",
            flexDirection:'row'
       }}>
          <div style={{
                flex:0.2,
                display:'flex',
                borderWidth:1,
                borderStyle:"solid",
                borderColor:"#000000",
                justifyContent:"center",
                alignItems:'center'
                }}
                >
                    <CommonText variant="h6" text="R"/>
            </div>
          <div style={{
              flex:0.6,
                borderWidth:1,
                borderStyle:"solid",
                borderColor:"#000000",
        }}
            >
                    <CommonText variant="h6" text="shirpmpsdfghjk" />
                    <CommonText variant="body1" text="september"/>

            </div>
            <div style={{
                    flex:0.2,
                    display:'flex',
                    borderWidth:1,
                    borderStyle:"solid",
                    borderColor:"#000000",
                    justifyContent:"center",
                    alignItems:'center'
                }}>
                        <CommonText variant="h6" text="icon"/>

            </div>
       </div>

       <div style={{
           display:'flex',
           height:'7rem',
           borderWidth:1,
           borderStyle:"dotted",
           borderColor:"#000000",
          
       }}>
           <CommonText text="image"
           />
       </div>

       <div
        style={{
            display:'flex',
           borderWidth:1,
           borderStyle:"dotted",
           borderColor:"#000000",
           padding:'5px'
        }}>
             <Typography
  variant="h"
  align="center"
  style={{ wordWrap: "break-word" }}
>
  123 456 789 qwertyuiopa sdfghjklzxcvbnmd fsafasfasfadfaf
</Typography>


       </div>





           <div style={{
               display:'flex',
               height:'5.7rem',
               borderWidth:1,
               borderStyle:"dotted",
               borderColor:"#000000",
               flexDirection:'row',
               justifyContent:'space-between'
           }}>
               <div 
                    style={{
                    display:'flex',
                    flex:0.3,
                    borderWidth:1,
                    borderStyle:"dotted",
                    borderColor:"#000000",
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center'
                }}
               >
                   <CommonText text="Hea"/>
                   <CommonText text="sha"/>
               </div>
               <div 
                    style={{
                        display:'flex',
                        flex:0.2,
                        borderWidth:1,
                        borderStyle:"dotted",
                        borderColor:"#000000",
                        alignItems:"center",
                        justifyContent:'center'
                    }}
               >
                   <CommonText text="sha"/>

               </div>
           </div>

        </div>
    )
}

export default CommonCard
