import React from "react";
import "./NewPage.css";

export default function NewPage(props) {
  return (
    <div className="User-page">
      <p>{props.name}</p>
    </div>
  );
}
