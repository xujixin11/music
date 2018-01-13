/**
 * 2017-12-12 Xu Jixin
 */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'dva/router';
import 'semantic-ui-css/semantic.min.css';
import Menum from '../components/Menum';
import Footer from '../components/Footer';


class BasicLayout extends Component {
  render() {
    return (
      <div>
        <Container style={{ background: 'whitesmoke', width: '100%', borderTop: '2px solid red' }}>
          <div style={{ flexDirection: 'row', textAlign: 'center' }} >
            <Link to="/">
              <div style={{ display: 'inline-block', fontSize: '20px', marginRight: '50px', color: '#2d2d2d' }}>
                落.
              </div>
            </Link>
            <div style={{ display: 'inline-block' }}>
              <Menum />
            </div>
            <a style={{ display: 'inline-block', marginLeft: '66px', color: '#2d2d2d' }}>注册/登录</a>
          </div>
        </Container>
        {this.props.children}
        <Footer />
      </div >
    );
  }
}
export default BasicLayout;
