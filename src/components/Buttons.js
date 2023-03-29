import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
export default function Buttons() {
  const {currPage,totalPage, handelPageChange} = useContext(AppContext);
  return (
    <div>
      
       { 
       currPage > 1 && <button onClick={()=>{
          handelPageChange(currPage-1)
        }}>
          Prev
        </button>
     }
    
       
        {
          currPage< totalPage && <button onClick={()=>{
          handelPageChange(currPage+1)
        }}>
          Next
        </button>}
      
      <div>
        {currPage}of{totalPage}
      </div>
    </div>
  )
}
