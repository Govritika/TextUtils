// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <NavBar/> */}
      <Router>
      <NavBar title="TextUtils" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
            <About mode={mode}/>
        </Route>
        <Route exact path="/">
            <TextForm heading="Enter text" showAlert={showAlert} mode={mode} />
        </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
