import React from "react";
import banner from "../../Assests/banner.mp4";

const Banner = () => {
  return (
    <div>
      
      {/* <video src={banner} type="video/mp4"/> */}

      <video width="100%" height="auto" autoPlay muted loop >
      <source src={banner} type="video/mp4"/>
</video>

    </div>
  );
};

export default Banner;
