import React, { useEffect, useState } from "react";
import axios from "axios";
import Tour from "./Tour";
const URL = "https://course-api.com/react-tours-project";

const ToursList = ({ setLoading }) => {
  const [list, setList] = useState([]);
  const a = async () => {
    const response = await axios.get(URL);

    setList(response.data);
    setLoading(false);
  };
  useEffect(() => {
    a();
  }, []);
  const removeTour = (id) => {
    const newTours = list.filter((tour) => tour.id !== id);
    setList(newTours);
  };
  const renderTours = list.map((item, i) => {
    return <Tour tour={item} key={item.id} removeTour={removeTour} i={i} />;
  });
  if (list.length === 0) {
    return (
      <div>
        <h1>No Tours Left</h1>
        <button className="btn" onClick={() => a()}>
          Refresh..
        </button>
      </div>
    );
  } else {
    return <div className="tour-list">{renderTours}</div>;
  }
};
export default ToursList;
