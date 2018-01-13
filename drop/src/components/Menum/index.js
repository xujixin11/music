/**
 * 2018-01-13 Xu Jixin
 */
import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'dva/router';

class Menum extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ display: 'inline-block' }}>
        <Menu secondary style={{ height: '60px', width: '750px', margin: '0 auto' }}>
          <Link to="/periodical">
            <Menu.Item name="期刊" active={activeItem === 'periodical'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
          </Link>
          <Link to="/single">
            <Menu.Item name="单曲" active={activeItem === 'single'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
          </Link>
          <Link to="/column">
            <Menu.Item name="专栏" active={activeItem === 'special'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
          </Link>
          <Link to="/activity">
            <Menu.Item name="活动" active={activeItem === 'activity'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
          </Link>
          <Link to="/app">
            <Menu.Item name="APP" active={activeItem === 'app'} onClick={this.handleItemClick} style={{ verticalAlign: 'middle', marginTop: '12px' }} />
          </Link>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Menum;
