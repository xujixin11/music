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
              <p style={{ display: 'inline-block', borderLeft: '3px solid red', fontSize: '25px', paddingLeft: '10px', marginTop: '10px', fontFamily: 'Verdana', fontWeight: '400' }}>
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

            <div style={{ marginTop: '-22px' }}>
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
            </div>
          </div>

          <div>
            <div style={{ float: 'left', width: '465px' }}>
              <div>
                <p style={{ display: 'inline-block', borderLeft: '3px solid red', fontSize: '25px', paddingLeft: '10px', marginTop: '45px', fontFamily: 'Verdana', fontWeight: '400' }}>
                  原创推荐
                </p>
              </div>

              <div style={{ marginTop: '22px' }}>
                <div style={{ display: 'flex' }}>
                  <img src="http://img-cdn2.luoo.net/pics/performers/201711/FuF4beQlreAyLZqtbRZ5LVEaR11p.jpg?imageView2/1/w/350" alt="徐真真-开心就足够" style={{ float: 'left', width: '150px', height: '150px', borderRadius: '75px' }} />
                  <div style={{ display: 'table', float: 'right', width: '270px', height: '150px', marginLeft: '45px' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                      <div>
                        <a style={{ fontSize: '22px', lineHeight: '28px', color: '#000' }}>开心就足够</a>
                        <p style={{ color: '#7d7d7d', fontSize: '18px', marginTop: '12px' }}>徐真真</p>
                        <p style={{ textAlign: 'right', marginTop: '7px', color: '#7d7d7d' }}>2017-11-29</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '12px' }}>
                <p style={{ fontFamily: 'Verdana' }}>
                  “人生不可能一帆风顺，你会选择什么态度去面对？有人会重新调整新的状态投入寻找理想生活，有人则一蹶不振放弃自己坚持的东西。开心乐观的信仰，
                  有时比黄金珍贵，徐真真用一首朗朗上口的Rap来告诉你看似复杂却又浅显的道理，轻快的flow与积极向上的歌词让人一秒就能豁然开朗，和真真的笑容
                  一样像阳光般照耀着你，驱散你内心的阴霾。今天，我想看到新的你，寒冬里也别忘记去晒晒太阳。”
                  </p>
              </div>
            </div>

            <div style={{ float: 'right', width: '495px' }}>
              <div style={{ marginLeft: '17px', height: '36px', marginTop: '28px' }}>
                <div style={{ float: 'right' }}>
                  <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>单曲</a>
                  <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>专栏</a>
                  <a style={{ display: 'inline-block', marginLeft: '5px', marginTop: '14px', color: '#7d7d7d' }}>更多＞</a>
                </div>
              </div>

              <div style={{ marginTop: '22px' }}>
                <div style={{ float: 'left', marginLeft: '38px' }}>
                  <a style={{ color: '#2d2d2d' }}>
                    <img src="http://img-cdn2.luoo.net/pics/essays/201711/FuM6NJm4JecMPU4ggaXAKjKQM2ab.jpg?imageView2/1/w/350/h/250" alt="人类首张在太空录制的专辑" style={{ width: '208px', height: '148px', borderRadius: '4px' }} />
                  </a>

                  <div>
                    <p style={{ fontSize: '14px', margin: '15px 0px 10px 0px', width: '208px', lineHeight: '20px', height: '38px' }}>人类首张在太空录制的专辑</p>
                    <p style={{ fontSize: '12px', color: '#7d7d7d' }}>李卤味</p>
                  </div>
                </div>

                <div style={{ float: 'left', marginLeft: '38px' }}>
                  <a style={{ color: '#2d2d2d' }}>
                    <img src="http://img-cdn2.luoo.net/pics/essays/201711/Ft3KtUoW1x3JtRIIpwaQXp9AwRLu.jpg?imageView2/1/w/350/h/250" alt="Sugar Man：隐没在城市里的一把声音" style={{ width: '208px', height: '148px', borderRadius: '4px' }} />
                  </a>

                  <div>
                    <p style={{ fontSize: '14px', margin: '15px 0px 10px 0px', width: '208px', lineHeight: '20px', height: '38px' }}>Sugar Man：隐没在城市里的一把声音</p>
                    <p style={{ fontSize: '12px', color: '#7d7d7d' }}>LUO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ width: '100%', clear: 'both' }}>
              <div style={{ float: 'left', fontSize: '24px' }}>
                <p style={{ borderLeft: '3px solid red', fontSize: '25px', paddingLeft: '10px', marginTop: '58px', fontFamily: 'Verdana', fontWeight: '400' }}>热门活动</p>
              </div>

              <div style={{ float: 'right', marginTop: '4em' }}>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>北京</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>上海</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>广州</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>深圳</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>武汉</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>成都</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>台湾</a>
                <a style={{ display: 'inline-block', marginLeft: '3px', marginTop: '14px', color: '#7d7d7d' }}>香港</a>
                <a style={{ display: 'inline-block', marginLeft: '5px', marginTop: '14px', color: '#7d7d7d' }}>更多＞</a>
              </div>
            </div>

            <div style={{ clear: 'both' }}>
              <div style={{ float: 'left', marginBottom: '20px', marginRight: '16px', width: '309px', marginTop: '22px' }}>
                <a style={{ float: 'left', width: '120px' }}>
                  <img src="http://img-cdn2.luoo.net/pics/event/14181/57874d7bd0c71.jpg!/fwfh/180x225" alt="湖泊乐队全国大型巡演" style={{ width: '120px', height: '170px', borderRadius: '4px' }} />
                </a>

                <div style={{ float: 'left', marginLeft: '15px', width: '172px' }}>
                  <a href="http://www.luoo.net/event/14181" title="湖泊乐队全国大型巡演" style={{ display: 'block', fontSize: '16px', lineHeight: '20px', marginBottom: '15px', width: '172px', height: '40px', color: '#2d2d2d' }}>湖泊乐队全国大型巡演</a>
                  <p style={{ color: '#7d7d7d' }}>时间：2016-09-02</p>
                  <p style={{ color: '#7d7d7d' }}>地点：保定</p>
                  <p style={{ color: '#7d7d7d' }}>场所：暗香咖啡</p>
                  <p style={{ color: '#7d7d7d' }}>费用：50元 - 60元</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div >
    );
  }
}
export default BasicLayout;
