/**
 * 2017-12-12 Xu Jixin
 */
import React, { Component } from 'react';
import { Container, Input, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Slider from 'react-slick';


class BasicLayout extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const settings = {
      dots: true,
      arrows: false,
    };
    return (
      <div>
        <Container style={{ background: 'whitesmoke', width: '100%', borderTop: '2px solid red' }}>
          <div style={{ flexDirection: 'row', textAlign: 'center' }} >
            <div style={{ display: 'inline-block', fontSize: '20px', marginRight: '50px' }}>
              落.
            </div>
            <div style={{ display: 'inline-block' }}>
              <Menu secondary style={{ height: '60px', width: '750px', margin: '0 auto' }} >
                <Menu.Item name="期刊" active={activeItem === 'periodical'} onClick={this.handleItemClick} />
                <Menu.Item name="单曲" active={activeItem === 'single'} onClick={this.handleItemClick} />
                <Menu.Item name="专栏" active={activeItem === 'special'} onClick={this.handleItemClick} />
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

        <Container style={{ marginTop: '2em', width: '960px' }}>
          <Slider {...settings}>
            <div>
              <img src="http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg" alt="小球：微醺一整片天空" draggable="false" />
            </div>
            <div>
              <img src="http://img-cdn2.luoo.net/site/201708/5993be0007772.jpg" alt="颜值爆表女主唱——她们不被外形与性别定义" draggable="false" />
            </div>
            <div>
              <img src="http://img-cdn2.luoo.net/site/201709/59b25ac16f984.jpg" alt="Pulp：关于生、死、超市" draggable="false" />
            </div>
            <div>
              <img src="http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg" alt="谁是下一个地下丝绒" draggable="false" />
            </div>
          </Slider>

          <div style={{ marginTop: '2em' }}>
            <h3>
              <p style={{ display: 'inline-block', borderLeft: '3px solid red', fontSize: '25px', paddingLeft: '10px', marginTop: '10px' }}>
                音乐期刊
              </p>

              <div style={{ float: 'right', marginTop: '5px' }}>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>摇滚</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>另类</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>民谣</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>流行</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>电子</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>英伦</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>古典</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>暗潮</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>爵士</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>金属</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>更多＞</h3>
              </div>
            </h3>
          </div>

          <div style={{ float: 'left', width: '640px' }}>
            <img src="http://img-cdn2.luoo.net/pics/vol/5a2eb94874061.jpg!/fwfh/640x452" alt="陷入至深里去" style={{ borderRadius: '4px', width: '640px', height: '452px' }} />
            <a style={{ textDecoration: 'none', color: '#2d2d2d' }}>vol.964 陷入至深里去</a>
          </div>

          <div style={{ float: 'right', width: '303px', marginBottom: '10px' }} >
            <img src="http://img-cdn2.luoo.net/pics/vol/5a2be90092c79.jpg!/fwfh/640x452" alt="理想永远不会也不应该消失" style={{ borderRadius: '3px', width: '302px', height: '210px' }} />
            <a style={{ textDecoration: 'none', color: '#2d2d2d' }}>vol.963 理想永远不会也不应该消失</a>
          </div>

          <div style={{ float: 'right', width: '303px', marginBottom: '10px' }} >
            <img src="http://img-cdn2.luoo.net/pics/vol/5a1adc357875e.jpg!/fwfh/640x452" alt="各有少年时" style={{ borderRadius: '3px', width: '302px', height: '210px' }} />
            <a style={{ textDecoration: 'none', color: '#2d2d2d' }}>vol.962 各有少年时</a>
          </div>

          <div style={{ marginBottom: '58px' }}>
            <div style={{ float: 'left', width: '465px' }}>
              <div>
                <p style={{ display: 'inline-block', borderLeft: '3px solid red', fontSize: '25px', paddingLeft: '10px', marginTop: '30px' }}>
                  原创推荐
                </p>
              </div>

              <div style={{ float: 'right', marginTop: '5px' }}>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>单曲</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>专栏</h3>
                <h3 style={{ display: 'inline-block', marginLeft: '5px', color: '#7d7d7d', fontSize: '15px' }}>更多＞</h3>
              </div>
            </div>
          </div>
        </Container>
      </div >
    );
  }
}
export default BasicLayout;
