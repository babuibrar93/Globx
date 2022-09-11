import React, { forwardRef } from "react";
import "./WhatIsGlobx.css";

const WhatIsGlobx = forwardRef((props, ref) => {
  return (
    <div className="WhatIsGlobx" ref={ref}>
      <h4>What is GLOBX?</h4>
      <h1>
        Globx Is A Solutions <br /> Agency.
      </h1>
      <div className="paragraph">
        <p>
          <b>Globx</b> leverages the power of digital marketing to <br /> help
          your business grow.
        </p>

        <p>
          We know how to pinpoint audiences, we understand <br /> technology,
          and we help scale your marketing <br /> budget to increase sales and
          user traffic.
        </p>
      </div>
    </div>
  );
});

export default WhatIsGlobx;
