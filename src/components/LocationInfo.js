import React from 'react';

const LocationInfo = ({name, type, dimension, numberResidents}) => {
    return (
        <div className='containerLocationInfo'>
            <p><strong>Nombre: <br/></strong>{name}</p>
            <p><strong>Type: <br/></strong>{type}</p>
            <p><strong>Dimension: <br/></strong>{dimension}</p>
            <p><strong>Population: <br/></strong>{numberResidents}</p>
        </div>
    );
};

export default LocationInfo;