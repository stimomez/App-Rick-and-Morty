
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';
import LocationInfo from './components/LocationInfo';
import image3 from './pictures/image3.png'
import image2 from './pictures/image2.png'
import NoResidents from './components/NoResidents';
function App() {

  const [ locations, setLocations ] = useState({})

  useEffect(() =>{
    const random = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocations(res.data))
},[])
 

  
  return (
    <div className="App">
      
       <img className='coverPageOne' src={image3} alt="foto" />
       <img className='coverPageTwo'src={image2} alt="" />
      
   
      <SearchBox setLocations={setLocations}/>
      <LocationInfo name={locations.name} type={locations.type} dimension={locations.dimension} numberResidents={locations.residents?.length}/>
      {locations.residents?.length === 0 ?(
          <NoResidents/>
           ) : (
             <ResidentsList  residents={ locations.residents }/>
          )
     }
     
      
    </div>
  );
}

export default App;
