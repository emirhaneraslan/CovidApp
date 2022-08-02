import { useState } from "react";
import Header from "./components/Header";
import CoronoForCountry from "./components/CoronForCountry";
import RecordedCorona from "./components/RecordedCorona";
import CoronaForContinent from "./components/CoronaForContinent";


function App() {
  const [key,setKey]=useState(1)
  return (
    <>
    <Header onMenuChange={(_key)=>{
      setKey(_key)
      alert(_key)
    }}/>

    <div className="md:container md:mx-auto p-8  page-content">
    {key===1 && <CoronoForCountry/>}
    {key===2 && <RecordedCorona/>}
    {key===3 && <CoronaForContinent />}
    </div>
    
    </>
  );
}

export default App;



/***************************************************/
/* HEADER KODLANMASI 1 */

/*
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header/>
    </>
  );
}

export default App;

*/
