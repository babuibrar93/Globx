import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Contact from "./components/Contact/Contact";
import WhatIsGlobx from "./components/WhatIsGlobx/WhatIsGlobx";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import "./App.css";
import Banner from "./components/Banner/Banner";

import { useRef } from "react";

function App() {
  const resultRef = useRef(null);
  const resultReftwo = useRef(null);
  const resultRefThree = useRef(null);
  const resultRefFour = useRef(null);
  return (
    <div className="App">
      <Navbar
        resultRef={resultRef}
        resultReftwo={resultReftwo}
        resultRefThree={resultRefThree}
        resultRefFour={resultRefFour}
      />
      <Banner />
      <WhatIsGlobx ref={resultRef} />
      <hr />
      <WhoWeAre ref={resultReftwo} />
      <hr />

      <WhatWeDo />
      <Team ref={resultRefThree} />
      <Contact ref={resultRefFour} />

      <Footer />
    </div>
  );
}

export default App;
