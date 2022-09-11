import React, { forwardRef } from "react";
import "./WhoWeAre.css";

const WhoWeAre = forwardRef((props, ref) => {
  return (
    <div className="divDivider" ref={ref}>
      <div className="overlay"></div>
      <div className="WhoWeAre">
        <h4>What are we</h4>

        <div className="paragraph">
          <p>
            Canadian based tech. Consultancy that's customer centric, <br />
            always giving the best solutions whether it be creating a <br />
            full scale digital revamp or a simple instagram post.
          </p>

          <p>
            With a background of digital marketing we aspire to deliver <br />
            the best solutions possible, we take pride in delivering the <br />
            best service for our customers.
          </p>
        </div>
      </div>
    </div>
  );
});

export default WhoWeAre;
