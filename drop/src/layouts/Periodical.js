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
        <Container style={{ width: '960px', margin: '0 auto' }}>
          <div>
            <div style={{ width: '590px', float: 'left' }}>
              <div style={{ display: 'table', background: '#f2f2f2', borderRadius: '4px', marginBottom: '35px', padding: '7px 7px 7px 20px' }}>
                <div style={{ borderRight: '0', display: 'table-cell', verticalAlign: 'middle' }}>
                  <p style={{ color: '#dd5862', display: 'inline-block', lineHeight: '28px', marginRight: '15px' }}>最新期刊</p>
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
