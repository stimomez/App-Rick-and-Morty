import React from "react";
import image3 from "../pictures/portada_para_twitter_rick_and_morty_by_katperez29_db6moc1-fullview.gif";
import image2 from "../pictures/e30ad83d153a1275e2e6372eb9476e72.gif";
import image4 from "../pictures/image_processing20200616-12657-1o37mef.gif";
import image5 from "../pictures/image2.png";

const CoverPage = () => {
  return (
    <div>
      <img className=" coverPageOne" src={image3} alt="foto" />
      <img className=" coverPageTwo" src={image2} alt="" />
      <img className=" telephone" src={image4} alt="" />
      <img className=" telephone2" src={image5} alt="" />
    </div>
  );
};

export default CoverPage;
