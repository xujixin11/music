/**
 * 2018-01-13 Xu Jixin
 */
import React from 'react';
import styles from './index.less';

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: 'inline-block', background: '#222', borderTop: '1px solid #111', padding: '36px 0', width: '100%', clear: 'both', marginTop: '90px' }}>
        <div style={{ width: '960px', margin: '0 auto', color: '#e1e1e1' }}>
          <div style={{ float: 'left', width: '380px' }}>
            <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '8px' }}>关于</h4>
            <p style={{ margin: '2px 0', fontSize: '12px', lineHeight: '24px' }}>
              <a style={{ color: '#e1e1e1' }}>关于落网</a>
            </p>
            <p style={{ margin: '2px 0', fontSize: '12px', lineHeight: '24px' }}>
              <a style={{ color: '#e1e1e1' }}>加入我们</a>
            </p>
            <p style={{ margin: '2px 0', fontSize: '12px', lineHeight: '24px' }}>
              <a style={{ color: '#e1e1e1' }}>联系合作</a>
            </p>
            <p style={{ margin: '2px 0', fontSize: '12px', lineHeight: '24px' }}>
              <a style={{ color: '#e1e1e1' }}>反馈建议</a>
            </p>
            <p style={{ margin: '2px 0', fontSize: '12px', lineHeight: '24px' }}>
              <a style={{ color: '#e1e1e1' }}>友情链接</a>
            </p>
          </div>

          <div style={{ float: 'left', width: '306px' }}>
            <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '8px' }}>APP</h4>
            <p className={styles.margin}>
              <a style={{ color: '#e1e1e1', display: 'inline-block', margin: '6px 0' }}>
                <img src={require('../../assets/apple.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for iPhone
              </a>
            </p>
            <p className={styles.margin}>
              <a style={{ color: '#e1e1e1', display: 'inline-block', margin: '6px 0' }}>
                <img src={require('../../assets/andriod.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for Android
            </a>
            </p>
            <p className={styles.margin}>
              <a style={{ color: '#e1e1e1', display: 'inline-block', margin: '6px 0' }}>
                <img src={require('../../assets/windows8.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for Windows 8
              </a>
            </p>
          </div>

          <div style={{ textAlign: 'right', float: 'right', width: '276px', marginTop: '-170px' }}>
            <h4 style={{ color: '#fff', fontSize: '14px', marginBottom: '8px' }}>关注落网</h4>
            <div style={{ marginBottom: '30px' }}>
              <img src={require('../../assets/QQ.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/weichat.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/weibo.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/douban.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
            </div>
            <p>© 2017 落网</p>
            <p style={{ marginTop: '16px' }}>
              <h4 style={{ display: 'inline-block', fontSize: '12px', height: '20px', width: '136px', verticalAlign: 'middle' }}>独立，不独于世</h4>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
