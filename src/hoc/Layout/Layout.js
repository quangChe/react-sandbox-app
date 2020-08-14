import React, { Component } from 'react';

import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false,
  }

  sideDrawerToggle = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
  }

  render() {
    return (
      <>
        <Toolbar
          toggleSideDrawer={this.sideDrawerToggle}/>
        <SideDrawer 
          opened={this.state.showSideDrawer} 
          toggle={this.sideDrawerToggle}/>
        <main className="MainContent">
          {this.props.children}
        </main>
      </>
    )
  }
}
  


export default Layout;