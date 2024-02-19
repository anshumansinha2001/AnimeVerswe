import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function () {
  const apikey = process.env.REACT_APP_API_KEY;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key={1}
                apikey={apikey}
                pageSize={48}
                language={""}
                heading={"Everywhere"}
              />
            }
          />
          <Route
            exact
            path="/japan"
            element={
              <News
                key={2}
                apikey={apikey}
                pageSize={48}
                language={"jp"}
                heading={"Japan"}
              />
            }
          />
          <Route
            exact
            path="/us"
            element={
              <News
                key={3}
                apikey={apikey}
                pageSize={48}
                language={"en"}
                heading={"Unites States"}
              />
            }
          />
          <Route
            exact
            path="/phillipines"
            element={
              <News
                key={4}
                apikey={apikey}
                pageSize={48}
                language={"es"}
                heading={"Phillipines"}
              />
            }
          />
          <Route
            exact
            path="/france"
            element={
              <News
                key={5}
                apikey={apikey}
                pageSize={48}
                language={"fr"}
                heading={"France"}
              />
            }
          />
          <Route
            exact
            path="/brazil"
            element={
              <News
                key={6}
                apikey={apikey}
                pageSize={48}
                language={"pt"}
                heading={"Brazil"}
              />
            }
          />
          <Route
            exact
            path="/south-korea"
            element={
              <News
                key={7}
                apikey={apikey}
                pageSize={48}
                language={"en"}
                heading={"South Korea"}
              />
            }
          />
          <Route
            exact
            path="/mexico"
            element={
              <News
                key={8}
                apikey={apikey}
                pageSize={48}
                language={"es"}
                heading={"Mexico"}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
