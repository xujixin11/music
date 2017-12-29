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
            <a style={{ color: '#dd5862', fontSize: '20px', margin: '30px 0 4px 0', display: 'block', height: '20px' }}>开心就足够
            <img src={require('../assets/play.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', marginLeft: '15px', verticalAlign: 'middle' }} />
            </a>
            <p style={{ color: '#838383', fontSize: '16px', marginBottom: '20px' }}>徐真真</p>
            <p>
              “人生不可能一帆风顺，你会选择什么态度去面对？有人会重新调整新的状态投入寻找理想生活，有人则一蹶不振放弃自己坚持的东西。开心乐观的信仰，
                有时比黄金珍贵，徐真真用一首朗朗上口的Rap来告诉你看似复杂却又浅显的道理，轻快的flow与积极向上的歌词让人一秒就能豁然开朗，和真真的笑容
                一样像阳光般照耀着你，驱散你内心的阴霾。今天，我想看到新的你，寒冬里也别忘记去晒晒太阳。”
            </p>
            <p style={{ marginTop: '15px', textAlign: 'right', color: '#9f9f9f' }}>推荐人： AngelaDaddy・2017-11-29</p>
            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <img src={require('../assets/share.png')} alt="pic" style={{ marginLeft: '16px', display: 'inline-block', verticalAlign: 'middle', width: '16px', height: '16px' }} />
              <img src={require('../assets/love.png')} alt="pic" style={{ marginLeft: '16px', display: 'inline-block', verticalAlign: 'middle', width: '16px', height: '16px' }} />
              <img src={require('../assets/warn.png')} alt="pic" style={{ marginLeft: '16px', display: 'inline-block', verticalAlign: 'middle', width: '20px', height: '20px' }} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Single;
