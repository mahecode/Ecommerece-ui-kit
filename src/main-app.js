import React from 'react';
import Login from './screens/Login/Login';
import {ThemeProvider, withTheme} from 'styled-components/native';
import {darkTheme, lightTheme} from './Themes/Themes';
import {connect} from 'react-redux';
import {toggleTheme} from './actions';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home';
import PublicStack from './containers/Public';
import UserStack from './containers/User';

class MainApp extends React.PureComponent {
  componentDidMount() {
    this.props.toggleTheme();
  }
  render() {
    return (
      <ThemeProvider
        theme={this.props.mode === 'dark' ? darkTheme : lightTheme}>
        {this.props.login ? <UserStack /> : <PublicStack />}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  mode: state.session.mode,
  login: state.session.login,
});

export default connect(mapStateToProps, {toggleTheme})(MainApp);
