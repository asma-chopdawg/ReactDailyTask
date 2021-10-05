import { Container, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommonInput from '../components/CommonInput'

const PostData = () => {
    const [posts, setPosts] = useState([
    ])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [id])
    return (
        <Container>
            <CommonInput placeholder={'Enter ID'} value={id} onChange={(id)=>{setId(id.target.value)}}/>
            <h4>{posts.title}</h4>
            {/* {
               posts && posts.map((item,index)=>{
                    return(
                        <h6 key={index}>{item.title}</h6>
                    )
                })
            } */}
        </Container>
    )
}

export default PostData
