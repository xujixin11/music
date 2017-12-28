/**
 * 2017-12-28 Xu Jixin
 */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Single extends Component {
  render() {
    return (
      <Container style={{ minHeight: '313px', margin: '0 auto', width: '960px' }}>
        <div style={{ marginBottom: '50px' }}>
          <img src="http://img-cdn2.luoo.net/pics/performers/201711/Fp7W4f0QjY8aQylkdCmRG6gkMcIV.bmp?imageView2/1/w/750/h/530" alt="开心就足够" style={{ float: 'left', borderRadius: '4px', marginRight: '50px', width: '480px', height: '340px' }} />
          <div>
            <a style={{ color: '#dd5862', fontSize: '20px', margin: '30px 0 4px 0', display: 'block', height: '20px' }}>开心就足够</a>
            <p style={{ color: '#838383', fontSize: '16px', marginBottom: '20px' }}>徐真真</p>
          </div>
        </div>
      </Container>
    );
  }
}
export default Single;
