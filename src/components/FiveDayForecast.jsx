import React from 'react';


function FiveDayForecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="window scale-down" style={{ width: "30rem", marginTop: "20px" }}>
      <div className="title-bar">
        <h1 className="title">Five Day Forecast</h1>
        <button aria-label="Close" className="close"></button>
        <button aria-label="Resize" disabled className="hidden"></button>
      </div>
      <div className="separator"></div>

      <div className="modeless-dialog" style={{ padding: "10px" }}>
        {forecast.map((day, index) => (
          <div key={index} className="field-row" style={{ justifyContent: "space-between", margin: "10px 0", backgroundColor: "#f0f0f0", borderRadius: "20px", padding: "10px 20px", color: "black" }}>
            <p style={{ margin: 0 }}>
              {new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0 }}>
                High: {day.main.temp_max.toFixed()}°F
              </p>
              <p style={{ margin: 0 }}>
                Low: {day.main.temp_min.toFixed()}°F
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveDayForecast;
