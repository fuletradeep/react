import React from "react";
import img from "./off.jpg";
import "./TourList.css";

function ListTour({ city, state, store }) {
  if (Object.keys(state).length !== 0) {
    console.log(state);
    console.log(state.data);
    var temp = [];
    temp = state.data.results;
    console.log(temp);
  }
  if (store !== 0) {
    console.log("bjbkjwbkwj", store);
    // <h4>{temp.snippet}</h4>

    return (
      <>
        {console.log("hello")}
        <h1 className="city">{city}</h1>
        <div className="color">
          <div className="citydata">
            {temp[0].images.map(img => (
              <div key={img.source_url}>
              <>
                <p>{img.caption}</p>
                <img src={img.source_url} alt="not" />
              </>
              </div>
            ))}
            <div className="about">
              <h3>About Country: </h3> ok
              {console.log(temp[0].snippet)}
              <h4>{temp[0].snippet}</h4>
            </div>
            <div className="location">
              <h3>About Location: </h3>
              <h4>longitude :{temp[0].coordinates.longitude}</h4>
              <h4>lattitude :{temp[0].coordinates.latitude}</h4>
            </div>
            <div className="Rating">
              <h3>Rating: </h3>
              <h4>Rating :{temp[0].score.toFixed(2)}</h4>
            </div>
            <div className="Type">
              <h3>Type: </h3>
              <h4>{temp[0].type}</h4>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default ListTour;
