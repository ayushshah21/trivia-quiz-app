import { useState } from "react";
import "./index.css";
import { Start } from "./Start";
import { DisplayQuestion } from "./DisplayQuestion";
import { DisplayChoices } from "./ChoicesList";
import { Game } from "./Game";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <>
      {!buttonClicked && <Start onButtonClicked={setButtonClicked} />}
      {buttonClicked && <Game />}
    </>
  );
}

export default App;
