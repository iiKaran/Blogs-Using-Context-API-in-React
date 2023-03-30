import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
export default function Blogs() {
  const {posts} = useContext(AppContext);
  return (
    <div>
      {posts.map((post)=>{
        return <div className='blog' key={post.id}>
             <h4>{post.title}</h4>
            <p className='fade'>by {post.author}on date <span className='fade' > {post.date} </span></p>
            <p>{post.content}</p>
            <div className=' tags'>{
            post.tags.map((tag,index)=>{
              return <span key={index} className='tag'>
                 #{tag}
              </span>
            })
          }
            </div>
        </div>
      })}
    </div>
  )
}
