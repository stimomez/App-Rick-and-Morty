import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ residentUrl }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  }, [residentUrl]);

  return (
    <div>
      <li
        className={
          resident.status === "Alive"
            ? "status-alive status"
            : resident.status === "Dead"
            ? "status-dead status"
            : "status-unknown status"
        }
      >
        <strong> {resident.status}</strong>
      </li>

      <img className="resident-image" src={resident.image} alt="" />
      <div className="card">
        <h4>{resident.name}</h4>
        <p>
          SPECIES <br /> <strong> {resident.species}</strong>
        </p>
        <p>
          ORIGIN <br /> <strong> {resident.origin?.name}</strong>
        </p>
        <p>
          EPISODES <br /> <strong> {resident.episode?.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default ResidentInfo;
