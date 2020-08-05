import React from "react";
import "./SubmissionPage.css";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

export default function SubmissionPage() {
  return (
    <div className="Submission-page">
      <SubmissionList />
    </div>
  );
}

function SubmissionList() {
  const names = ["Unity game", "Hello app", "Wow there"];
  const submissionUrls = [
    "github.com",
    "google.com",
    "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_960_720.jpg",
  ];
  const checked=[1, 0, 2];
  return (
    <div className="Submission-list">
      <BackButton />
      <h1>All Submissions</h1>
      {names.map((name, index) => (
        <SubmissionItem
          index={index}
          name={name}
          url={submissionUrls[index]}
          checked={checked[index]}
          key={name + submissionUrls[index] + "KEY"}
        />
      ))}
    </div>
  );
}

function SubmissionItem({ index, name, url, checked }) {
  const userName = "Fred";
  return (
    <Link
      to={{
        pathname: `/submissions/view/${index}`,
        state: { name: name, url: url },
      }}
      className="Submission-link"
    >
      <div className="Submission-item">
        <div className="Submission-name">
          <h2>{name}</h2>
        </div>
        <div className="Submission-data">
          <h3>{userName}</h3>
          <div className="Checked-icon">
            {checked != 0 && <h3>{checked == 1 ? "✓" : "x"}</h3>}
          </div>
        </div>
      </div>
    </Link>
  );
}
