import React, { useState } from 'react';
import axios from 'axios';
const SearchBox = ({ setLocations }) => {
    const [ search, setSearch ] = useState('')

    const searchLocation = () =>{
        if (search > 126) {
            return 'Location does not exist'
        } else if (search === 0) {
            return 'Location does not exist'
        } else if (search < 0) {
            return 'Location does not exist'
        } else {
            
            axios.get(`https://rickandmortyapi.com/api/location/${search}`)
      .then(res => {
          setLocations(res.data)

        
      }
        )
        return true;
        }
        
        
    }
  
    return (
        <div className='searchBox'>
            <input
                 type="number"
                 min={1}
                 max={127}
                 placeholder='Write the ID of the location'
                 onChange={e => setSearch( e.target.value ) } 
                 value= {search}
            />
            <button onClick={() => searchLocation() }>Search</button> 
            { searchLocation() !== true ? (
                alert()
            )}           
        </div>
    );
};

export default SearchBox;