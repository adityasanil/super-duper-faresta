import React from "react";
import CSVReader from "react-csv-reader";

const UploadCSV = ({ onFileLoaded, onError }) => {
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: "greedy",
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  return (
    <CSVReader
      cssClass="csv-reader-input"
      // label="Upload file"
      onFileLoaded={onFileLoaded}
      onError={onError}
      parserOptions={papaparseOptions}
      inputId="asset_file"
      inputStyle={{ color: "black" }}
    />
  );
};

export default UploadCSV;
