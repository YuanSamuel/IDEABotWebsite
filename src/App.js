import React from "react";
import "./App.css";
import DogPhoto from "./dog_photo.jpg";
import FlowerPhoto from "./flower.png";
import JulyPhoto from "./july.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewPage from "./NewPage.js";
import SubmissionPage from "./SubmissionPage.js";
import ViewSubmissions from "./ViewSubmissions.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          path="/user/:name"
          render={(props) => {
            return <NewPage name={props.match.params.name} />;
          }}
        />
        <Route exact path="/submissions" component={SubmissionPage} />
        <Route
          path="/submissions/view/:index/"
          render={(props) => {
            return (
              <ViewSubmissions
                name={props.location.state.name}
                url={props.location.state.url}
              />
            );
          }}
        />
      </div>
    </Router>
  );
}

function Home() {
  const names = ["hello", "hey", "wow", "yes", "nice"];

  const images = [DogPhoto, JulyPhoto, DogPhoto, JulyPhoto, DogPhoto];

  return (
    <div>
      <header className="App-header">
        <h1>IDEA</h1>
        <UserList>
          {names.map((name, index) => (
            <UserCard
              name={name}
              key={name + "KEY"}
              index={index + 1}
              img={images[index]}
            />
          ))}
        </UserList>
        <Link to={"/submissions"}>
          <p>View Submissions</p>
        </Link>
      </header>
    </div>
  );
}

function UserList({ children }) {
  return <div className="User-list">{children}</div>;
}

function UserCard({ name, index, img }) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  function onImgLoad({ target: img }) {
    setHeight(img.offsetHeight);
    setWidth(img.offsetWidth);
  }

  return (
    <div>
      <Link className="User-card" to={`/user/${name}`}>
        <div className="User-number">
          <h2>{index}</h2>
        </div>
        <div
          className={
            width > height ? "User-image-landscape" : "User-image-portrait"
          }
        >
          <img src={img} onLoad={onImgLoad} alt="profile" />
        </div>
        <div className="User-name">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default App;
