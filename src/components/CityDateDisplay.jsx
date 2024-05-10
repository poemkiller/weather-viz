import React from "react";
// Import system.css if not already included globally
// import 'system.css';

function CityDateDisplay({ data }) {
    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="container window">
            <div className="location bg-white p-4 shadow-md rounded-lg">
                <p className="text-lg font-semibold">{data.name}</p> {/* Display city name with larger, bold font */}
                <p className="text-sm text-gray-600">{date}</p> {/* Display formatted date in smaller, gray font */}
            </div>
        </div>
    );
}

export default CityDateDisplay;

