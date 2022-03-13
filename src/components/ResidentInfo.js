import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({residentUrl}) => {
    const [ resident, setResident ] = useState({})
    useEffect(() =>{
        axios.get(residentUrl)
           .then(res => setResident(res.data))
    },[residentUrl])
    console.log(resident)
    return (

       
       <div   >
        
            
             <img src={resident.image} alt="" />
             <div className='card'>
             <h4>{resident.name}</h4>
             <p>Species <br /> <strong> {resident.species}</strong></p>
             <p>Origin <br /> <strong> {resident.origin?.name}</strong></p>
             <p>Episodes <br /> <strong> {resident.episode?.length}</strong></p>
             </div>
        </div>
    );
};

export default ResidentInfo;