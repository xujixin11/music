/**
 * 2017-12-24 Xu Jixin
 */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Periodical extends Component {
  render() {
    return (
      <div>
        <Container style={{ width: '960px', margin: '0 auto', marginTop: '60px' }}>
          <div>
            <div style={{ width: '590px', float: 'left' }}>
              <div style={{ display: 'table', background: '#f2f2f2', borderRadius: '4px', marginBottom: '35px', padding: '7px 7px 7px 20px' }}>
                <div style={{ borderRight: '0', display: 'table-cell', verticalAlign: 'middle' }}>
                  <p style={{ color: '#dd5862', display: 'inline-block', lineHeight: '28px', marginRight: '15px' }}>最新期刊</p>
                </div>

                <div style={{ float: 'left', paddingLeft: '10px', width: '470px', borderLeft: '1px solid #e5e5e5' }}>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>摇滚</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>另类</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>民谣</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>流行</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>电子</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>英伦</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>古典</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>暗潮</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>爵士</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>金属</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>后摇</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>迷幻摇滚</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>朋克</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>说唱</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>世界音乐</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>硬核</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>氛围</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>原声</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>雷鬼</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>乡村</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>蓝调</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>实验</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>华语流行</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>后朋克</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>人声</a>
                  <a style={{ display: 'inline-block', marginRight: '15px', lineHeight: '28px', height: '28px', color: '#5f5f5f' }}>品牌</a>
                </div>
              </div>

              <div style={{ marginBottom: '60px' }}>
                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="在穿梭自由里与自我相遇">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a3bef2c12392.jpg!/fwfh/640x452" alt="在穿梭自由里与自我相遇" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="在穿梭自由里与自我相遇" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.966 在穿梭自由里与自我相遇</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      108
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      2784
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="Swan">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a3560ee1c750.jpg!/fwfh/640x452" alt="Swan" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="Swan" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.965 Swan</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      141
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      5162
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="陷入至深里去">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a2eb94874061.jpg!/fwfh/640x452" alt="陷入至深里去" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="陷入至深里去" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.964 陷入至深里去</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      161
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      7358
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="理想永远不会也不应该消失">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a2be90092c79.jpg!/fwfh/640x452" alt="理想永远不会也不应该消失" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="理想永远不会也不应该消失" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.963 理想永远不会也不应该消失</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      130
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      8100
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="各有少年时">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a1adc357875e.jpg!/fwfh/640x452" alt="各有少年时" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="各有少年时" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.962 各有少年时</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      266
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      14439
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="南方初冬的街道">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a15aa4b58c76.jpg!/fwfh/640x452" alt="南方初冬的街道" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="南方初冬的街道" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.961 南方初冬的街道</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      310
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      17141
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="黄昏时 我们一路狂奔">
                    <img src="http://img-cdn2.luoo.net/pics/vol/5a09cd931ee91.jpg!/fwfh/640x452" alt="黄昏时 我们一路狂奔" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="黄昏时 我们一路狂奔" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.960 黄昏时 我们一路狂奔</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      253
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      17245
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="总是走在寻找意义的路途中">
                    <img src="http://img-cdn2.luoo.net/pics/vol/59ff5a1d38bde.jpg!/fwfh/640x452" alt="总是走在寻找意义的路途中" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="总是走在寻找意义的路途中" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.959 总是走在寻找意义的路途中</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      231
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      17181
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="悲而能壮 哀而不伤">
                    <img src="http://img-cdn2.luoo.net/pics/vol/59fa01ec9d14e.jpg!/fwfh/640x452" alt="悲而能壮 哀而不伤" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="悲而能壮 哀而不伤" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.958 悲而能壮 哀而不伤</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      132
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      17269
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px', display: 'block' }}>
                  <a title="山水间">
                    <img src="http://img-cdn2.luoo.net/pics/vol/59f21a77d9627.jpg!/fwfh/640x452" alt="山水间" style={{ display: 'block', maxWidth: '590px', borderRadius: '4px 4px 0 0' }} />
                  </a>

                  <div style={{ backgroundColor: '#f2f2f2', borderRadius: '0 0 4px 4px', lineHeight: '40px', height: '50px', padding: '0 15px 0 12px', display: 'block' }}>
                    <a title="山水间" style={{ fontSize: '14px', color: '#2d2d2d' }} >vol.957 山水间</a>
                    <div style={{ float: 'right', color: '#7d7d7d' }}>
                      <img src={require('../assets/message3.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      224
                    </div>
                    <div style={{ float: 'right', color: '#7d7d7d', margin: '0 20px' }}>
                      <img src={require('../assets/xin.png')} alt="pic" style={{ display: 'inline-block', verticalAlign: 'middle', width: '13px', height: '13px', marginRight: '5px', marginBottom: '2px' }} />
                      17029
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ float: 'right', width: '290px' }}>
              <div style={{ marginBottom: '25px' }}>
                <div style={{ paddingBottom: '17px' }}>
                  <p style={{ fontSize: '14px' }}>最近热门期刊</p>
                </div>

                <div>
                  <div style={{ marginBottom: '25px' }}>
                    <a style={{ display: 'block', float: 'left', marginRight: '13px' }}>
                      <img src="http://img-cdn2.luoo.net/pics/vol/54218f5e7a1ee.jpg!/fwfh/160x120" alt="迷笛！迷笛！" style={{ display: 'block', maxWidth: '42px', borderRadius: '3px' }} />
                    </a>
                    <div style={{ lineHeight: '1' }}>
                      <a title="迷笛！迷笛！" style={{ margin: '1px 0 4px 0', display: 'block', color: '#2d2d2d' }}>迷笛！迷笛！</a>
                      <p style={{ color: '#7d7d7d', fontSize: '12px' }}>25908人收藏</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <a style={{ display: 'block', float: 'left', marginRight: '13px' }}>
                      <img src="http://img-cdn2.luoo.net/pics/vol/5750635f9f56e.jpg!/fwfh/160x120" alt="云自无心水自闲" style={{ display: 'block', maxWidth: '42px', borderRadius: '3px' }} />
                    </a>
                    <div style={{ lineHeight: '1' }}>
                      <a title="云自无心水自闲" style={{ margin: '1px 0 4px 0', display: 'block', color: '#2d2d2d' }}>云自无心水自闲</a>
                      <p style={{ color: '#7d7d7d', fontSize: '12px' }}>22951人收藏</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <a style={{ display: 'block', float: 'left', marginRight: '13px' }}>
                      <img src="http://img-cdn2.luoo.net/pics/vol/59c7cfd8c532a.jpg!/fwfh/160x120" alt="独自对抗这世界" style={{ display: 'block', maxWidth: '42px', borderRadius: '3px' }} />
                    </a>
                    <div style={{ lineHeight: '1' }}>
                      <a title="独自对抗这世界" style={{ margin: '1px 0 4px 0', display: 'block', color: '#2d2d2d' }}>独自对抗这世界</a>
                      <p style={{ color: '#7d7d7d', fontSize: '12px' }}>17365人收藏</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <a style={{ display: 'block', float: 'left', marginRight: '13px' }}>
                      <img src="http://img-cdn2.luoo.net/pics/vol/59f21a77d9627.jpg!/fwfh/160x120" alt="山水间" style={{ display: 'block', maxWidth: '42px', borderRadius: '3px' }} />
                    </a>
                    <div style={{ lineHeight: '1' }}>
                      <a title="山水间" style={{ margin: '1px 0 4px 0', display: 'block', color: '#2d2d2d' }}>山水间</a>
                      <p style={{ color: '#7d7d7d', fontSize: '12px' }}>17032人收藏</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <a style={{ display: 'block', float: 'left', marginRight: '13px' }}>
                      <img src="http://img-cdn2.luoo.net/pics/vol/5a3bef2c12392.jpg!/fwfh/160x120" alt="在穿梭自由里与自我相遇" style={{ display: 'block', maxWidth: '42px', borderRadius: '3px' }} />
                    </a>
                    <div style={{ lineHeight: '1' }}>
                      <a title="在穿梭自由里与自我相遇" style={{ margin: '1px 0 4px 0', display: 'block', color: '#2d2d2d' }}>在穿梭自由里与自我相遇</a>
                      <p style={{ color: '#7d7d7d', fontSize: '12px' }}>2796人收藏</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Periodical;
