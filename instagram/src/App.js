import React from 'react';
import './App.css';
import withConditionalRender from './withConditionalRender';
import Register from './components/Login/Register';
import AppLoggedIn from './AppLoggedIn';


const DynamicComp = withConditionalRender(AppLoggedIn)(Register);


class App extends React.Component {
  
  state = {
      loggedIn: false
  };

 toggle = event => {
    if(localStorage.getItem('loggedIn')) {
    localStorage.removeItem('loggedIn');
    this.setState({ loggedIn: false });
    } else {
    localStorage.setItem('loggedIn', true);
    this.setState({ loggedIn: true });
    }
}

  render() {
    return (
      <div className="App">
        <DynamicComp toggle={this.toggle}/>
      </div>
    );
  }
}

export default App;
