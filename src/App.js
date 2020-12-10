//import logo from "./logo.svg";
//import bg from "./images/bg.jpeg";
import "./reset.css";
import "./App.scss";
import Name from "./components/Name";
import Description from "./components/Description";
import Button from "./components/Button";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("el componente ya esta montado");
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://api.github.com/users/rociodithurbide");
    const json = await data.json();

    console.log(json);
    setName(json.name);
    setBio(json.bio);
    setUrl(json.html_url);
  }
  console.log("primer render, o rerender");
  return (
    <div className="App">
      <div className="card">
        <Name name={name} />
        <Description bio={bio} />
        <Button url={url} />
      </div>
    </div>
  );
}

export default App;
