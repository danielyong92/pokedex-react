import { React, useContext } from "react";
import "./Card.css";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Card = props => {
  const { id, name, image, type, handleLikeClick, removeFavorite } = props;

  return (
    <>
      {(
      <Grid item md={4}>
        <div className="card-container">
          <Grid item>
            <img id="image" src={image}></img>
          </Grid>
          <div className="pokemon-stats">
            <Grid item>
              <div>Pokemon Name: {name}</div>
              <div>Id: {id}</div>
              <div>type: {type}</div>
            </Grid>
          </div>
          <div className="buttons">
            <Grid item>
              <button>
                <ArrowDownwardIcon />
              </button>
              <button onClick={() => handleLikeClick(props)}>
                <FavoriteIcon />
              </button>
            </Grid>
          </div>
        </div>
      </Grid>
      )
      }
    </>
  );
};

export default Card;
