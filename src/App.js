import Blogs from "./components/Blogs";
import Head from "./components/Head";
import Buttons from "./components/Buttons";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/Appcontext";
import './App.css'
export default function App() {
  const {loading,fetchData} = useContext(AppContext);

  useEffect(()=>{
   fetchData();
  },[])
  return <div> 
       <Head />
       <div className="cont">
       {loading ? <div className="custom-loader"></div>:<Blogs/>}
       </div>
      <Buttons/>
   
  </div>;
}
