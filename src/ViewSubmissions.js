import React from "react";
import "./ViewSubmissions.css";
import { useHistory } from "react-router-dom";
import BackButton from "./BackButton";

export default function ViewSubmissions({ name, url }) {
  const history = useHistory();

  function handleClick(e, correct) {
    e.preventDefault();
    if (correct) {
      console.log("correct!");
      history.goBack();
    } else {
      console.log("incorrect");
      history.goBack();
    }
  }

  return (
    <div className="Main-page">
      <BackButton />
      <h1>{name}</h1>
      <div className="Submission-url">
        <a
          href={url.includes("http") ? url : `//${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </div>
      <div className="Submission">
        <button onClick={(event) => handleClick(event, false)}>
          <h1>-</h1>
        </button>
        <div className="Submission-photo">
          <img src={url} alt="Submission" />
        </div>
        <button onClick={(event) => handleClick(event, true)}>
          <h1>+</h1>
        </button>
      </div>
    </div>
  );
}
