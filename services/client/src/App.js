import React, { Component } from 'react';
import axios from 'axios';

// Material-UI
import FlatButton from 'material-ui/FlatButton';

// Theme
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100
  },
  img: {
    paddingTop: 50,
    maxWidth: 125
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends Component {
  handleClick() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/start`)
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
  };
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <FlatButton
            onClick={() => this.handleClick()}
            label='P'
            backgroundColor='#C8E6C9'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='I'
            backgroundColor='#BBDEFB'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='N'
            backgroundColor='#ffcdd2'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='G'
            backgroundColor='#E1BEE7'
          />
          <br/><br/>
          <FlatButton
            onClick={() => this.handleClick()}
            label='P'
            backgroundColor='#BBDEFB'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='O'
            backgroundColor='#C8E6C9'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='N'
            backgroundColor='#E1BEE7'
          />
          &nbsp;
          <FlatButton
            onClick={() => this.handleClick()}
            label='G'
            backgroundColor='#ffcdd2'
          />
        <p><img src="beatles.png" alt="beatles" style={styles.img}/></p>
        </div>
      </MuiThemeProvider>
    )
  };
};

export default App;
