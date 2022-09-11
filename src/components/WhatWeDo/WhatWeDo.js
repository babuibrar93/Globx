import React from "react";
import "./WhatWeDo.css";
import { data, dataTwo } from "./Data";

const WhatWeDo = () => {
  // console.log(data);
  // console.log(dataTwo);
  return (
    <div>
      <div className="WhatWeDo">WHAT WE DO</div>
      <div className="lineSplit">
        <div className="WhatWeDoCards">
          {data?.map((item, index) => {
            console.log(index);
            return (
              <div
                className={index % 2 === 1 ? "cards" : "cardsTwo"}
                key={index}
              >
                <img src={item.image} className="images" />
                <h6 style={{ marginTop: "20px" }}>{item.description}</h6>
              </div>
            );
          })}
        </div>

        <div className="WhatWeDoCards">
          {dataTwo?.map((item, index) => {
            return (
              <div
                className={index % 2 === 0 ? "cards" : "cardsTwo"}
                key={index}
              >
                <img src={item.image} className="images" />
                <h6 style={{ marginTop: "20px" }}>{item.description}</h6>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default WhatWeDo;
