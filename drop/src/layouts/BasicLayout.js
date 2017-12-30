/**
 * 2017-12-12 Xu Jixin
 */
import React, { Component } from 'react';
import { Container, Input, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'dva/router';

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
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
              <Menu secondary style={{ height: '60px', width: '750px', margin: '0 auto' }} >
                <Link to="/periodical">
                  <Menu.Item name="期刊" active={activeItem === 'periodical'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
                </Link>
                <Link to="/single">
                  <Menu.Item name="单曲" active={activeItem === 'single'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
                </Link>
                <Link to="/column">
                  <Menu.Item name="专栏" active={activeItem === 'special'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
                </Link>
                <Menu.Item name="活动" active={activeItem === 'activity'} onClick={this.handleItemClick} />
                <Menu.Item name="APP" active={activeItem === 'app'} onClick={this.handleItemClick} />
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
              </Menu>
            </div>
            <a style={{ display: 'inline-block', marginLeft: '65px', textDecoration: 'none', color: '#2d2d2d' }}>注册/登录</a>
          </div>
        </Container>
        {this.props.children}

        <div style={{ display: 'flex', background: '#222', borderTop: '1px solid #111', padding: '35px 0', width: '100%', clear: 'both', marginTop: '90px' }}>
          <div style={{ width: '960px', margin: '0 auto', color: '#e1e1e1' }}>
            <div style={{ float: 'left', width: '380px' }}>
              <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '7px' }}>关于</h4>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1' }}>关于落网</a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1' }}>加入我们</a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1' }}>联系合作</a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1' }}>反馈建议</a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1' }}>友情链接</a>
              </p>
            </div>

            <div style={{ float: 'left', width: '305px' }}>
              <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '7px' }}>APP</h4>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1', display: 'inline-block', marginTop: '5px', marginBottom: '7px' }}>
                  <img src={require('../assets/apple.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', backgroundPosition: '0 -90px', marginRight: '8px' }} />
                  for iPhone
                </a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1', display: 'inline-block', marginTop: '5px', marginBottom: '7px' }}>
                  <img src={require('../assets/andriod.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', backgroundPosition: '0 -30px', marginRight: '8px' }} />
                  for Android
                </a>
              </p>
              <p style={{ margin: '2px 0' }}>
                <a style={{ color: '#e1e1e1', display: 'inline-block', marginTop: '5px', marginBottom: '7px' }}>
                  <img src={require('../assets/windows8.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', backgroundPosition: '0 -60px', marginRight: '8px' }} />
                  for Windows 8
                </a>
              </p>
            </div>

            <div style={{ textAlign: 'right', float: 'right', width: '275px' }}>
              <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '10px' }}>关注落网</h4>
              <div style={{ marginBottom: '30px' }}>
                <img src={require('../assets/QQ.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '15px' }} />
                <img src={require('../assets/weichat.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '15px' }} />
                <img src={require('../assets/weibo.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '15px' }} />
                <img src={require('../assets/douban.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center' }} />
              </div>
              <p>© 2017 落网</p>
              <p style={{ marginTop: '15px' }}>
                <h4 style={{ display: 'inline-block', fontSize: '12px', height: '20px', width: '136px', verticalAlign: 'middle' }}>独立，不独于世</h4>
              </p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default BasicLayout;
