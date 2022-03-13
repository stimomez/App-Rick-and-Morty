import React, { useState } from 'react';
import axios from 'axios';
const SearchBox = ({ setLocations }) => {
    const [ search, setSearch ] = useState('')

    const searchLocation = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
      .then(res => setLocations(res.data))
    }
    return (
        <div>
            <input
                 type="number" 
                 onChange={e => setSearch( e.target.value )} 
                 value={search}
            />
            <button onClick={() => searchLocation() }>Search</button>            
        </div>
    );
};

export default SearchBox;