import React from "react";
import PropTypes from "prop-types";
import "../styles/Cards.css";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={{ width: "90%" }} className="my-2">
          {" "}
          Buscar:{" "}
          <input
            className="w-100 my-2"
            type="text"
            name="inputText"
          />{" "}
        </label>
        <button type="submit" className="btn btn-warning btn-sm m-2 pb-0 mt-1">
          <span className="material-icons md-18">search</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
