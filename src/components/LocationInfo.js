import React from "react";

const LocationInfo = ({ name, type, dimension, numberResidents }) => {
  return (
    <div className="container-location-info">
      <p className="location-info">
        <strong>
          Name: <br />
        </strong>
        {name}
      </p>
      <p className="location-info">
        <strong>
          Type: <br />
        </strong>
        {type}
      </p>
      <p className="location-info">
        <strong>
          Dimension: <br />
        </strong>
        {dimension}
      </p>
      <p className="location-info">
        <strong>
          Population: <br />
        </strong>
        {numberResidents}
      </p>
    </div>
  );
};

export default LocationInfo;
