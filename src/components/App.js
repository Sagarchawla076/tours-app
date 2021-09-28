import React, { useState } from "react";
import ToursList from "./ToursList";
import "../style/main.scss";
const App = () => {
  const [loading, setLoading] = useState(true);

  //   if (loading) {
  //     return <div>Loading.....</div>;
  //   }
  return (
    <div className="container">
      <h2 className="container__heading">
        Our Tours <div className="underline">&ensp;</div>
      </h2>
      <ToursList setLoading={setLoading} />
    </div>
  );
};
export default App;
