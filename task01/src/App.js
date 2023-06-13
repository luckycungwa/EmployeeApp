import logo from "./logo.svg";
import "./App.css";
// Importing components
// import Form from './comp/Form';
import Textbox from "./comp/Text-box";
import Button from "./comp/Button";

function App() {
  return (
    <div className="App">
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="section">
          <div className="Input-field">
            <h4 className="label">Full Names</h4> <Textbox />
          </div>
          <div className="Input-field">
            <h4 className="label">Email</h4> <Textbox />
          </div>
          <div className="Input-field">
            <h4 className="label">Cell Number</h4> <Textbox type="password"/>
          </div>
          <div className="Input-field">
            <h4 className="label">Employee ID</h4> <Textbox type="ID"/>
          </div>
          <div className="Input-field">
            <h4 className="label">Position</h4> <Textbox type="Option dropdown" />
          </div>
          <div className="Input-field">
            <h4 className="label">Gender</h4> <Textbox type="Radiobox"/>
          </div>
          <Button />
        </div>

        <div className="section">
          <div className="profile">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="profile">
          <img src={logo} className="App-logo" alt="logo" /> Position
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
