import React from 'react'
import { useState } from 'react';
import axios from 'axios'

import { useEffect } from 'react';
const DetaFeaching = () => {
    const [post, setPost] =useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            console.log(res)
            setPost(res.data)
            
        })
        .catch(err =>{
            console.log("Error in Data featchiing")
        })
    }, [])
  return (
    <div>DetaFeaching


        <ol>
            
                {post.map((pos, id)=>{
                    return(
                        <li key={id}>
                            {pos.title}


                        </li>
                    )

                })}
        
        </ol>
    </div>
  )
}

export default DetaFeaching