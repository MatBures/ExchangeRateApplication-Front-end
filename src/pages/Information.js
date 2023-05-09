import React from "react";
import { Link, useLocation } from "react-router-dom";

// Define a functional component named Information
const Information = () => {
    const location = useLocation();

    // Extract the required data passed from the previous page
    const {
        amount,
        cnbMid,
        country,
        currBuy,
        currMid,
        currSell,
        ecbMid,
        move,
        name,
        shortName,
        valBuy,
        valMid,
        valSell,
        validFrom,
        version,
    } = location.state;

    // Render the component
    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        Exchange Rates
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex">
                        <button className="btn btn-outline-light me-2">
                            View Exchange Rates
                        </button>
                        <button className="btn btn-outline-light">
                            Update Exchange Rates
                        </button>
                    </div>
                </div>
            </nav>

            {/* Display the exchange rates information */}
            <div className="view-items">
                <h1>{shortName}</h1>
                <div className="py-4">
                    <h4 className="">Valid From: {validFrom}</h4>
                    <h4 className="">Name: {name}</h4>
                    <h4 className="">Country: {country}</h4>
                    <h4 className="">Move: {move}</h4>
                    <h4 className="">Amount: {amount}</h4>
                    <h4 className="">Val Buy: {valBuy}</h4>
                    <h4 className="">Val Sell: {valSell}</h4>
                    <h4 className="">Val Mid: {valMid}</h4>
                    <h4 className="">Curr Buy: {currBuy}</h4>
                    <h4 className="">Curr Sell: {currSell}</h4>
                    <h4 className="">Curr Mid: {currMid}</h4>
                    <h4 className="">Version: {version}</h4>
                    <h4 className="">CNB Mid: {cnbMid}</h4>
                    <h4 className="">ECB Mid: {ecbMid}</h4>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default Information;