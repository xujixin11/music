/**
 * 2018-01-13 Xu Jixin
 */
import React from 'react';
import styles from './index.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.style}>
        <div style={{ width: '960px', margin: '0 auto', color: '#e1e1e1' }}>
          <div className={styles.float}>
            <h4 className={styles.h4}>关于</h4>
            <p className={styles.p}>
              <a className={styles.a}>关于落网</a>
            </p>
            <p className={styles.p}>
              <a className={styles.a}>加入我们</a>
            </p>
            <p className={styles.p}>
              <a className={styles.a}>联系合作</a>
            </p>
            <p className={styles.p}>
              <a className={styles.a}>反馈建议</a>
            </p>
            <p className={styles.p}>
              <a className={styles.a}>友情链接</a>
            </p>
          </div>

          <div className={styles.left}>
            <h4 className={styles.h4}>APP</h4>
            <p className={styles.margin}>
              <a className={styles.display}>
                <img src={require('../../assets/apple.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for iPhone
              </a>
            </p>
            <p className={styles.margin}>
              <a className={styles.display}>
                <img src={require('../../assets/andriod.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for Android
            </a>
            </p>
            <p className={styles.margin}>
              <a className={styles.display}>
                <img src={require('../../assets/windows8.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
                for Windows 8
              </a>
            </p>
          </div>

          <div className={styles.text}>
            <h4 className={styles.h4}>关注落网</h4>
            <div className={styles.marginBottom}>
              <img src={require('../../assets/QQ.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/weichat.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/weibo.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
              <img src={require('../../assets/douban.png')} alt="pic" style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'center', marginRight: '8px' }} />
            </div>
            <p>© 2017 落网</p>
            <p className={styles.marginTop}>
              <h4 className={styles.middle}>独立，不独于世</h4>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
