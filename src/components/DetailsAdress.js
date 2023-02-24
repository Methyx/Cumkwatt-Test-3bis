import { useEffect, useState } from "react";
import { Card } from "@mui/material";

import Map from "./Map";

// style
import "../style/details-adress.css";

// functions
import parseLocation from "../functions/parseLocation";

const DetailsAdress = ({ location }) => {
  // Init
  const [detailsData, setDetailsData] = useState({});

  // useEffect
  useEffect(() => {
    if (location) {
      setDetailsData(parseLocation(location));
    }
  }, [location]);

  return (
    <>
      <div className="details">
        <h2>Résultats</h2>
        <div className="address">
          <Card variant="outlined" className="item">
            <p>Numéro</p>
            <p>{detailsData.number}</p>
          </Card>

          <Card variant="outlined" className="item">
            <p>Rue</p>
            <p>{detailsData.street}</p>
          </Card>
        </div>
        <div className="city">
          <Card variant="outlined" className="item">
            <p>Code</p>
            <p>{detailsData.zip}</p>
          </Card>
          <Card variant="outlined" className="item">
            <p>Ville</p>
            <p>{detailsData.city}</p>
          </Card>
        </div>
        <Card variant="outlined" className="item">
          <p>Département</p>
          <p>{detailsData.dpt}</p>
        </Card>
        <div className="gps">
          <Card variant="outlined" className="item">
            <p>Latitude</p>
            <p>{detailsData.lat}</p>
          </Card>{" "}
          <Card variant="outlined" className="item">
            <p>Longitude</p>
            <p>{detailsData.long}</p>
          </Card>
        </div>
      </div>
      {detailsData.long && detailsData.lat && <Map data={detailsData} />}
    </>
  );
};
export default DetailsAdress;
