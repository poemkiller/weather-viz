import React from 'react';


function LocationField({ location, setLocation, searchLocation }) {
    return (
        <div className="window scale-down" style={{ width: "30rem" }}>
            <div className="title-bar">
                <button aria-label="Close" className="close" onClick={() => setLocation('')}></button>
                <h1 className="title">Search Location</h1>
                <button aria-label="Resize" disabled className="hidden"></button>
            </div>
            <div className="separator"></div>

            <div className="modeless-dialog">
                <section className="field-row" style={{ justifyContent: "flex-start" }}>
                    <label htmlFor="location_input" className="modeless-text">Location:</label>
                    <input
                        id="location_input"
                        type="text"
                        style={{ width: "100%" }}
                        placeholder="Enter Location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                    />
                </section>
                <section className="field-row" style={{ justifyContent: "flex-end" }}>
                    <button className="btn" onClick={() => setLocation('')}>Clear</button>
                    <button className="btn" style={{ width: "95px" }} onClick={(event) => searchLocation(event)}>Search</button>
                </section>
            </div>
        </div>
    );
}

export default LocationField;
