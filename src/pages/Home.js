// Import the necessary dependencies and components
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Define the Home component
export default function Home() {

    // Initialize state variables
    const [showExchangeRates, setShowExchangeRates] = useState([]);
    const [viewData, setViewData] = useState(false);

    // Define function to update exchange rates
    const updateExchangeRates = async () => {
        try {

            // Make an API call to fetch exchange rates
            const result = await axios.get(
                "http://localhost:8080/api/exchangerates?usedb=false"
            );

            // Display the result in an alert box
            alert(result.data);

            // Update the state to indicate that data has been fetched
            setViewData(true);
        } catch (error) {

            // Display an error message in an alert box and log the error to the console
            alert(error.message);
            console.log(error);
        }
    };

    // Define function to view exchange rates
    const viewExchangeRates = async () => {
        try {

            // Make an API call to fetch exchange rates from the database
            const result = await axios.get(
                "http://localhost:8080/api/exchangerates?usedb=true"
            );

            // Update the state with the fetched data
            setShowExchangeRates(result.data);
        } catch (error) {

            // Display an error message in an alert box and log the error to the console
            alert(error.message);
            console.log(error);
        }
    };

    // Log the state variable showExchangeRates to the console for debugging purposes
    console.log(showExchangeRates);

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
                        <button
                            className="btn btn-outline-light me-2"
                            onClick={viewExchangeRates}
                            // Disable the button if data has not been fetched yet
                            disabled={viewData ? false : true}
                        >
                            View Exchange Rates
                        </button>
                        <button
                            className="btn btn-outline-light"
                            onClick={updateExchangeRates}
                        >
                            Update Exchange Rates
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="py-4">

                    {/* Table */}
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th>Short Name</th>
                                <th>Valid From</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Move</th>
                                <th>Amount</th>
                                <th>Val Buy</th>
                                <th>Val Sell</th>
                                <th>Val Mid</th>
                                <th>Curr Buy</th>
                                <th>Curr Sell</th>
                                <th>Curr Mid</th>
                                <th>Version</th>
                                <th>CNB Mid</th>
                                <th>ECB Mid</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                             {/*Table mapping */}
                            {showExchangeRates.map((item) => {
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
                                } = item;

                                //Table preparing
                                return (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={shortName}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {shortName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {validFrom}
                                        </td>
                                        <td className="px-6 py-4">{name}</td>
                                        <td className="px-6 py-4">{country}</td>
                                        <td className="px-6 py-4">{move}</td>
                                        <td className="px-6 py-4">{amount}</td>
                                        <td className="px-6 py-4">{valBuy}</td>
                                        <td className="px-6 py-4">{valSell}</td>
                                        <td className="px-6 py-4">{valMid}</td>
                                        <td className="px-6 py-4">{currBuy}</td>
                                        <td className="px-6 py-4">
                                            {currSell}
                                        </td>
                                        <td className="px-6 py-4">{currMid}</td>
                                        <td className="px-6 py-4">{version}</td>
                                        <td className="px-6 py-4">{cnbMid}</td>
                                        <td className="px-6 py-4">{ecbMid}</td>
                                        <td>
                                            <Link
                                                to="/view"
                                                state={{
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
                                                    version,
                                                    validFrom,
                                                }}
                                            >
                                                <button className="btn btn-outline-dark me-2">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
