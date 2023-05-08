import React from 'react';
import axios from 'axios';

export default function Navbar() {
  const viewExchangeRates = async () => {
    const result = await axios.get('http://localhost:8080/api/exchangerates?usedb=true');
    console.log(result);
    // You can set the exchangeRates state here with the data from the API
  };

  const updateExchangeRates = async () => {
    const result = await axios.get('http://localhost:8080/api/exchangerates?usedb=false');
    console.log(result);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">
            Exchange Rates
          </a>
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
            <button className="btn btn-outline-light me-2" onClick={viewExchangeRates}>
              View Exchange Rates
            </button>
            <button className="btn btn-outline-light" onClick={updateExchangeRates}>
              Update Exchange Rates
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}