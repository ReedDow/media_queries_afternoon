import React, {Component} from 'react';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }

  render(){
    return (
    <div className="App">
      <header className="App-nav">
        <div className = 'nav1'>Start Bootstrap</div>
        <nav className = 'desktop-menu'>
          <span className = 'link1'>About</span>
          <span className = 'link2'>Projects</span>
          <span className = 'link3'>Contact</span>
        </nav>
        <div className = 'dropdown' onClick = {this.toggleDropdown}>Menu</div>
        {this.state.dropdownView
        ? (
          <nav className = 'mobile-menu'>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </nav>
        )
        : null}
      </header>
      <form>
        <h1 className = 'title'>GRAYSCALE</h1>
        <p>A free, responsive, one page Bootstrap theme dreated by Start Bootstrap</p>
        <button>Get Started</button>
      </form>
    </div>
  );
  }
}
export default App;
