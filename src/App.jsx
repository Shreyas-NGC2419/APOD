import { useEffect, useState } from 'react'
import { Footer,MainContent, SideBar } from './components'

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [data,setData] = useState();

  
  useEffect(()=>{
    async function fetchImage() {
      const KEY = import.meta.env.VITE_APOD_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${KEY}`;

      const today = new Date().toDateString();
      const local_key = `NASA-${today}`

      if(localStorage.getItem(local_key)){
        const data = JSON.parse(localStorage.getItem(local_key));
        console.log("Fetched from LocalStorage");
        
        setData(data);
        return;
      }

      localStorage.clear();
      try{
        const response = await fetch(url)
        const actres = await response.json();
        localStorage.setItem(local_key,JSON.stringify(actres))
        console.log("Fetched from API")
        setData(actres)
        console.log(data);
      }
      catch(err){
        console.error("Cannot fetch the image")
        console.error(err.message)
      }
    }
    fetchImage();
  },[])
  
  function handleToggleModal(){
    setShowSideBar(!showSideBar);
  }
  return (
    <>
      {data?(<MainContent data={data}/>) :(
        <div className="loader">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showSideBar&&<SideBar handleToggleModal={handleToggleModal} data={data}/>}
      <Footer showSideBar={showSideBar} handleToggleModal={handleToggleModal} data={data}/>
    </>
  )
}

export default App
