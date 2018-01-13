/**
 * 2018-01-02 Xu Jixin
 */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Container style={{ width: '660px', margin: '0 auto', minHeight: '316px', marginTop: '86px' }}>
        <div style={{ width: '216px', height: '448px', marginRight: '116px' }}>
          <img src={require('../assets/iphone.jpg')} alt="pic" />
          <div style={{ display: 'block', width: '190px', height: '338px', marginTop: '-400px', marginLeft: '12px', overflow: 'hidden' }}>
            <img src="http://img-cdn2.luoo.net/system/59520a3a407cf.jpg" alt="pic" style={{ height: '338px', marginLeft: '0 auto' }} />
          </div>
        </div>
      </Container>
    );
  }
}
export default App;
