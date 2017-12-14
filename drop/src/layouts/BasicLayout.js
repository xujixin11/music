/**
 * 2017-12-12 Xu Jixin
 */
import React, { Component } from 'react';
import { Container, Segment, Input, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Slider from 'react-slick';


class BasicLayout extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Container style={{ background: 'whitesmoke', width: '100%' }}>
          <Menu secondary style={{ justifyContent: 'center', height: '60', alignItems: 'center', borderTop: '2px solid red' }} >
            <Menu.Item name="落." active={activeItem === 'periodical'} style={{ fontSize: '20' }} />
            <Menu.Item name="期刊" active={activeItem === 'periodical'} onClick={this.handleItemClick} />
            <Menu.Item name="单曲" active={activeItem === 'single'} onClick={this.handleItemClick} />
            <Menu.Item name="专栏" active={activeItem === 'special'} onClick={this.handleItemClick} />
            <Menu.Item name="活动" active={activeItem === 'activity'} onClick={this.handleItemClick} />
            <Menu.Item name="APP" active={activeItem === 'app'} onClick={this.handleItemClick} />
            <Menu.Menu>
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item name="注册/登录" active={activeItem === 'logout'} style={{ marginLeft: '150' }} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </Container>

        <Container style={{ marginTop: '2em', width: '100%', paddingLeft: '200px' }}>
          <Slider {...settings} style={{ textAlign: 'center' }}>
            <div><img src="http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg" alt="小球：微醺一整片天空" draggable="false" /></div>
            <div><img src="http://img-cdn2.luoo.net/site/201708/5993be0007772.jpg" alt="颜值爆表女主唱——她们不被外形与性别定义" draggable="false" /></div>
            <div><img src="http://img-cdn2.luoo.net/site/201709/59b25ac16f984.jpg" alt="Pulp：关于生、死、超市" draggable="false" /></div>
            <div><img src="http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg" alt="谁是下一个地下丝绒" draggable="false" /></div>
          </Slider>
        </Container>

        <Segment style={{ margin: '5em 0em 0em', background: 'white' }}>
          <Segment>Footer</Segment>
        </Segment>
      </div>
    );
  }
}
export default BasicLayout;
