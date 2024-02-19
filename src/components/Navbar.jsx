import React from "react";
import logo from "../images/favicon.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
        <div className="container-fluid">
          <img
            src={logo}
            className="img-thumbnail mx-2"
            width="40"
            alt="logo"
          />
          <Link className="navbar-brand" to="/">
            AnimeVerse
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/japan">
                  Japan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/us">
                  US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/phillipines">
                  Phillipines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/france">
                  France
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brazil">
                  Brazil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/south-korea">
                  South Korea
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mexico">
                  Mexico
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
