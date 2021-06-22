import logo from './logo.svg';

function SidePanel() {
  return (<div className="sidepanel"> 
  <img src={logo} className="App-logo" alt="logo" />
  <a href="">Dashboard</a>
  <a href="">Widget</a>
  <a href="">Reviews</a>
  <a href="">Customers</a>
  <a href="">Online Analysis</a>
  <a href="">Settings</a>
  </div>);
}

export default SidePanel;