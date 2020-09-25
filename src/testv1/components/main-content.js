import React from 'react';
import { ThemeContext } from '../theme-context';

class MainContent extends React.Component {
  render() {
    //let props = this.props;
    //let theme = this.context;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div style={{width: '300px', height: '300px', margin: 'auto', backgroundColor: theme.background}}>
            {this.props.children}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
//MainContent.contextType = ThemeContext;

export default MainContent;