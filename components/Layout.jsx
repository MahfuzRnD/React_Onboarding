import React, { Component } from 'react';
import { Container } from 'reactstrap';

import NavBarSemanticUI from './NavBarSemanticUI';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavBarSemanticUI />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
//import { NavMenu } from './NavMenu';
/*
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}*/


