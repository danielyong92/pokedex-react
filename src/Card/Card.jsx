import React from "react";
// const styles = require("./Card.module.scss");
import Grid from "@mui/material/Grid";

export const Card = props => {
  const { id, name, image, type, index } = props;

  return (
    <>
      <div class="cardContainer">
        <img id="image" src={image}></img>
        <div>Pokemon Name: {name}</div>
        <div>Id: {id}</div>
        <div>type: {type}</div>
        <button>DISLIKE</button>
        <button>LIKE</button>
      </div>
    </>
  );
};

export default Card;
