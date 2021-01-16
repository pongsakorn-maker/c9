import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../style/header.css";
function header() {
  return (
    <div className="header">
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Home
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        News
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Download
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Cookie
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Web Board
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Game Info
      </Button>
      <Button
        className="animate__animated animate__fadeInDown"
        variant="outlined"
        color="primary"
      >
        Ranking
      </Button>
    </div>
  );
}

export default header;
