import React, { Component } from 'react';

import './Layout.scss';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false,
  }

  sideDrawerToggle = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
  }

  render() {
    return (
      <Aux>
        <Toolbar
          toggleSideDrawer={this.sideDrawerToggle}/>
        <SideDrawer 
          opened={this.state.showSideDrawer} 
          toggle={this.sideDrawerToggle}/>
        <main className="MainContent">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
  


export default Layout;