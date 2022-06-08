import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Filter.css";
import { useDispatch } from "react-redux";

const Filter = ({ crossClick, desijugad }) => {
  const [are, setare] = useState("");
  const [cata, setcata] = useState("");
  const [opn, setopn] = useState("");
  const dispach = useDispatch();
  const area = [
    "Select",
    "Thane",
    "Pune",
    "Mumbai Suburban",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  const category = [
    "Select",
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
  ];
  const adddfilter = (are, cata, opn) => {
    return {
      type: "FILTER",
      are: are,
      cata: cata,
      opn: opn,
    };
  };
  const cngARE = (e) => {
    setare(e.target.value);
  };
  const cngcata = (e) => {
    setcata(e.target.value);
  };
  const cngopn = (e) => {
    setopn(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        padding: "20px 10px",
        alignItems: "center",
      }}
    >
      <CloseIcon className="crossButton" onClick={crossClick} />
      <label
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "130px",
          fontSize: "20px",
        }}
      >
        Area
        <select
          value={are}
          onChange={cngARE}
          style={{
            backgroundColor: "lightgray",
            width: "120px",
            fontSize: "17px",
            border: "0px",
            backgroundColor: "whitesmoke",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          {area.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "90px",
          fontSize: "20px",
        }}
      >
        Category
        <select
          value={cata}
          onChange={cngcata}
          style={{
            backgroundColor: "lightgray",
            width: "120px",
            fontSize: "17px",
            border: "0px",
            backgroundColor: "whitesmoke",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          {category.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "120px",
          fontSize: "20px",
        }}
      >
        Date
        <input
          style={{
            backgroundColor: "lightgray",
            width: "120px",
            fontSize: "15px",
            border: "0px",
            backgroundColor: "whitesmoke",
            padding: "4px",
            borderRadius: "5px",
          }}
          type="date"
          value={opn}
          onChange={cngopn}
        />
      </label>
      <button
        className="addFilter"
        style={{
          width: "90px",
          fontFamily: "Jost",
          fontSize: "18px",
          border: "0px",
          borderRadius: "3px",
        }}
        onClick={() => {
          dispach(adddfilter(are, cata, opn));
          crossClick();
          desijugad();
          setare("");
          setcata("");
        }}
      >
        Add Filter
      </button>
    </div>
  );
};

export default Filter;
