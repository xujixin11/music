/**
 * 2018-01-02 Xu Jixin
 */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Activity extends Component {
  render() {
    return (
      <Container style={{ width: '960px', margin: '0 auto', minHeight: '312px' }}>
        <div style={{ marginBottom: '50px', marginTop: '60px' }}>
          <img src="http://img-cdn2.luoo.net/pics/essays/201711/FuM6NJm4JecMPU4ggaXAKjKQM2ab.jpg?imageView2/1/w/750/h/530" alt="人类首张在太空录制的专辑" style={{ width: '480px', height: '340px', borderRadius: '4px', marginRight: '50px' }} />
          <div style={{ display: 'inline-block', marginBottom: '30px' }}>
            <p style={{ fontSize: '20px', margin: '55px 0 35px 0' }}>人类首张在太空录制的专辑</p>
          </div>
        </div>
      </Container>
    );
  }
}
export default Activity;
