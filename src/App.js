import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import { useState } from "react";

function App() {
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
      <Navbar title="Codex" home="Homepage" />
      <Alerts alert={alert} />
      <Text showAlert={showAlert} />
    </>
  );
}

export default App;
