import React from 'react';
import {ThemeContext, themes} from './theme-context';
import { Toolbar } from './components/toolbar';
import MainContent from './components/main-content';

class AppContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
          <MainContent>Hi</MainContent>
        </ThemeContext.Provider>
      </>
    );
  }
}
export default AppContext;