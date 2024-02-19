import React from "react";
import loading from "../images/loading-spinner.gif";

export default function Spinner() {
  return (
    <div className="text-center p-4">
      <img src={loading} alt="loading" width="70" />
    </div>
  );
}
