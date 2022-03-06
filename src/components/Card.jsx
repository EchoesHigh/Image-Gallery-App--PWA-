import React from "react";
import PropTypes from "prop-types";
import "../styles/Cards.css";

const Card = ({ img }) => {
  return (
    <div>
      <div>
        <img
          src={img}
          alt="Imagen.png"
          style={{ width: "25rem" }}
          className="items"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
