import React from "react";
import "./Box.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";

const Box = ({
  ShopName,
  Area,
  Category,
  OpenDate,
  CloseDate,
  id,
  desijugad,
}) => {
  const dispatch = useDispatch();

  const deleteList = (id) => {
    return {
      type: "DELETE_TO_LIST",
      playload: id,
    };
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "whitesmoke",
          width: "300px",
          height: "260px",
          margin: "20px 20px",
          padding: "20px 25px",
          borderRadius: "10px",
          fontFamily: "Jost",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <DeleteForeverIcon
          style={{ fontSize: "30px" }}
          className="deleteicn"
          onClick={() => {
            dispatch(deleteList(id));
            desijugad();
          }}
        />
        <p style={{ fontSize: "26px", fontWeight: "bold" }}>{ShopName}</p>
        <span style={{ display: "flex", gap: "35px", fontSize: "21px" }}>
          <p>Area : </p> <p>{Area}</p>
        </span>
        <span style={{ display: "flex", gap: "35px", fontSize: "21px" }}>
          <p>Category : </p> <p>{Category}</p>
        </span>
        <span style={{ display: "flex", gap: "35px", fontSize: "21px" }}>
          <p>Opening Date : </p> <p>{OpenDate}</p>
        </span>
        <span style={{ display: "flex", gap: "35px", fontSize: "21px" }}>
          <p>Closing Date : </p> <p>{CloseDate}</p>
        </span>
      </div>
    </>
  );
};

export default Box;
