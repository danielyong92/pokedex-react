import React from "react";

export const Card = props => {
  const { id, name, image, type, index } = props;
  return (
    <>
      <div>
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
