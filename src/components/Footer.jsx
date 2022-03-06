import React from "react";

const Footer = ({ height = 0 }) => {
  const totalHeight = window.innerHeight;
  const desiredHeight = Math.ceil(totalHeight * 0.88);
  const position = height > desiredHeight ? "static" : "fixed";
  return (
    <footer
      className="bg-dark text-center text-white mb-0 h3"
      style={{
        position: `${position}`,
        width: "100%",
        left: "0",
        bottom: "0",
      }}
    >
      <div className="container-fluid p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="https://www.facebook.com/adrian.miranda.148/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-facebook-f"> </i>{" "}
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="https://twitter.com/Lov_Ito"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-twitter"> </i>{" "}
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="mailto:adrian.arturo.miranda@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-google"> </i>{" "}
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="https://www.instagram.com/adrian.inr/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-instagram"> </i>{" "}
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="https://www.linkedin.com/in/adrianmirandar/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-linkedin-in"> </i>{" "}
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="https://github.com/EchoesHigh"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            style={{ width: "42px" }}
          >
            <i className="fab fa-github"> </i>{" "}
          </a>{" "}
        </section>{" "}
      </div>{" "}
      <div className="text-center p-3">
        {" "}
        Adrián Miranda - &copy; {new Date().getFullYear()}:{" "}
        <a
          className="text-white"
          href="https://echoeshigh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          EchoesHigh{" "}
        </a>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
