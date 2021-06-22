import logo from './logo.svg';
import SidePanel from './SidePanel.js';
import MiniPanelRow from './MiniPanelRow.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <SidePanel />
        <div className="mainpanel">

        <MiniPanelRow />
          <div className="visitorspanel">
            <h2>Website Visitors</h2>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
