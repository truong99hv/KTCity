import "./App.css";
import Counter from "./component/counter/Counter";
import Header from "./component/Header";
import Photos from "./component/photo/Photos";
import Game from "./component/tictactoe/Game";
import Timer from "./component/Timer";
import Toggle from "./component/toggle/Toggle";

// parent component
function App() {
  return (
    <div>
      {/* <Toggle></Toggle> */}
      {/* <Game></Game> */}
      <Photos />
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <Header /> */}
    </div>
  );
}

// rendering list

export default App;
