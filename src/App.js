import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h5>Szótár</h5>
      </header>
      <div>
        <h1>Szavak</h1>
      </div>
      <div id="jatekmezo">
        <div>
          <select>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <span className="oszlop">
          <div>Angol</div>
          <div></div>
          <div></div>
          <div></div>
        </span>
        <span className="oszlop">
          <div>Magyar</div>
          <div></div>
          <div></div>
          <div></div>
        </span>
        <span className="oszlop">
          <div>Visszajelzés</div>
          <div></div>
          <div></div>
          <div></div>
        </span>
      </div>
    </div>
  );
}

export default App;
