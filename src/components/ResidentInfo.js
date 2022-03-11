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
        <div>
            <h4>{resident.name}</h4>
             <img src={resident.image} alt="" />
        </div>
    );
};

export default ResidentInfo;