import React, { useState } from "react";
import "./App.css";
import { TextField } from "@mui/material";
import Box from "./Box";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";

function App() {
  const [shopName, setshopName] = useState("");
  const [areaa, setareaa] = useState("");
  const [categoryy, setcategoryy] = useState("");
  const [opendate, setopendate] = useState("");
  const [closedate, setclosedate] = useState("");
  const [showfilter, setshowFilter] = useState(false);
  const listt = useSelector((state) => state.listReducer.list);
  console.log(listt);
  const dispatch = useDispatch();

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
  const changeshopname = (event) => {
    setshopName(event.target.value);
  };
  const changeCategory = (event) => {
    setcategoryy(event.target.value);
  };
  const changeArea = (event) => {
    setareaa(event.target.value);
  };
  const closingdatee = (event) => {
    if (event.target.value < opendate) {
      alert("Enter date after the open");
    } else {
      setclosedate(event.target.value);
    }
  };
  const openingdatee = (event) => {
    setopendate(event.target.value);
  };

  const addList = (shopName, areaa, categoryy, opendate, closedate) => {
    return {
      type: "ADD_TO_LIST",
      shopName: shopName,
      areaa: areaa,
      categoryy: categoryy,
      opendate: opendate,
      closedate: closedate,
    };
  };

  const setshoplist = () => {
    if (
      shopName === "" ||
      areaa === "" ||
      categoryy === "" ||
      opendate === "" ||
      closedate === ""
    ) {
      alert("Enter Shop Details");
    } else {
      dispatch(addList(shopName, areaa, categoryy, opendate, closedate));
      setshopName("");
      setareaa("");
      setcategoryy("");
      setopendate("");
      setclosedate("");
    }
  };
  const desijugad = () => {
    setshopName(" ");
  };
  const crossClick = () => {
    setshowFilter(false);
  };
  const showFilterbox = () => {
    setshowFilter(true);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="addItemBox">
          <h4 className="shopList">Add Shop List</h4>
          <div className="input">
            <TextField
              className="inputfiled"
              id="standard-search"
              label="Shop Name"
              variant="standard"
              name="shopname"
              value={shopName}
              onChange={changeshopname}
            />
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
                value={areaa}
                onChange={changeArea}
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
                value={categoryy}
                onChange={changeCategory}
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
                gap: "40px",
                fontSize: "20px",
              }}
            >
              Opening Date
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
                value={opendate}
                onChange={openingdatee}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                fontSize: "20px",
              }}
            >
              Closing Date
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
                name="closingDate"
                value={closedate}
                onChange={closingdatee}
              />
            </label>

            <button onClick={setshoplist} className="btn">
              Add List
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <button
            style={{
              width: "60px",
              fontSize: "18px",
              fontFamily: "Jost",
              border: "0px",
              borderRadius: "4px",
              // marginLeft: "800px",
              padding: "2px 2px",
            }}
            className="filterCss"
            onClick={showFilterbox}
          >
            Filter
          </button>
        </div>
        <div
          style={{
            display: `${showfilter ? "inline" : "none"}`,
            position: "absolute",
            right: "300px",
            top: "280px",
          }}
        >
          <Filter crossClick={crossClick} desijugad={desijugad} />
        </div>
        <div
          style={{
            // display: "grid",
            // gridTemplateRows: " auto auto auto",
            // gridTemplateColumns: "auto auto auto",
            maxWidth: "50vw",
            // marginLeft: "-300px",
          }}
          className="boxxGrid"
        >
          {listt.map((evn, index) => (
            <Box
              key={index}
              id={index}
              ShopName={evn.ShopName}
              Area={evn.Area}
              Category={evn.Category}
              OpenDate={evn.OpenDate}
              CloseDate={evn.CloseDate}
              desijugad={desijugad}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
