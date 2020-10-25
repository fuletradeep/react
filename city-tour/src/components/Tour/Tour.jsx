import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tour.css";
import ListTour from "./ListTour";

function Tour() {
  const [state, setstate] = useState({});
  const [input, setinput] = useState("");
  const [city, setcity] = useState("");

  useEffect(() => {
    if (city)
      axios
        .get(
          `https://www.triposo.com/api/20200803/location.json?id=${city
            .charAt(0)
            .toUpperCase()}${city.slice(
            1,
            city.length
          )}&account=1CHGX7C7&token=o1hjsrebmua2hi2e5pslimiqkq5f9he4`
        )
        .then(res => {
          setstate(res);
          console.log(res);
        });
  }, [city]);

  console.log(Object.keys(state).length);
  let store = Object.keys(state).length;

  return (
    <div>
      {console.log(state)}
      <div className="jumbotron">
        <h2>SEARCH BY COUNTRY</h2>
        <form action="#" className="mainform" onSubmit={() => setcity(input)}>
          <input
            type="text"
            value={input}
            onChange={e => setinput(e.target.value)}
            className="input"
            placeholder="Enter country name ..."
          />
          <input type="submit" className="submit" />
        </form>
      </div>

      <ListTour city={city} state={state} store={store} />
    </div>
  );
}

export default Tour;
