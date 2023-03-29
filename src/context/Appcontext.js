import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext(); 
// creating the instance of the createContext method 
export function AppContextProvider({children}){
// for providing the context 
// children is the content in between the AppContextProvider tag in the index.js file
const [loading ,setLoading]= useState(false); 
const [posts,setPosts]= useState([]); 
const [currPage,setCurrPage]=useState(1); 
const [totalPage, setTotalPage]=useState(null);
 
// function to get the data
async function fetchData(p=1)
{
 setLoading(true); 
 let url = `${baseUrl}?page=${p}`; 
 let  data = await fetch(url); 
 let content = await data.json();
 setPosts(content.posts); 
 setCurrPage(content.page);
 setTotalPage(content.totalPages); 
 setLoading(false);
}
function handelPageChange(p){
   fetchData(p);
   setCurrPage(p);
}

const value = {
 loading, 
 setLoading, 
 posts, 
 setPosts, 
 currPage, 
 setCurrPage, 
 totalPage, 
 setTotalPage,
 fetchData, 
 handelPageChange 
}
return <AppContext.Provider value={value}>
 {children}
</AppContext.Provider>
}