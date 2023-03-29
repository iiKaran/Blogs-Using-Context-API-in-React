import Blogs from "./components/Blogs";
import Head from "./components/Head";
import Buttons from "./components/Buttons";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/Appcontext";
export default function App() {
  const {loading,fetchData} = useContext(AppContext);

  useEffect(()=>{
   fetchData();
  },[])
  return <div> 
       <Head />
       {loading ? <div>Loading</div>:<Blogs/>}
      <Buttons/>
   
  </div>;
}
