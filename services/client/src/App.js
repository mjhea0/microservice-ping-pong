import React, { Component } from 'react';
import axios from 'axios';

// Material-UI
import RaisedButton from 'material-ui/RaisedButton';

// Theme
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
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
          <RaisedButton
            onClick={() => this.handleClick()}
            label='P'
            backgroundColor='#C8E6C9'
          />
          &nbsp;
          <RaisedButton
            onClick={() => this.handleClick()}
            label='I'
            backgroundColor='#BBDEFB'
          />
          &nbsp;
          <RaisedButton
            onClick={() => this.handleClick()}
            label='N'
            backgroundColor='#ffcdd2'
          />
          &nbsp;
          <RaisedButton
            onClick={() => this.handleClick()}
            label='G'
            backgroundColor='#E1BEE7'
          />
        </div>
      </MuiThemeProvider>
    )
  };
};

export default App;
