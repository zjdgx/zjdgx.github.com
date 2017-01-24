/**
 * Author: ZJDGX
 * Date: 2016/05/24
 * Description: change page style
 */

import React from 'react';

require('./PageStyle.styl');

export default class PageStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curStyle: props.styleIndex
    };
  };

  changePageStyle(style, index) {
    this.setState({curStyle: index});
    this.props.changePageStyle(style);
  };

  render() {
    return (
      <ul className='page-style'>
        {
          this.props.styles.map(function (style, index) {
            return <li key={index}
                       className={'ib ' + style + (index == this.state.curStyle ? ' cur' : '')}
                       onClick={this.changePageStyle.bind(this, style, index)}></li>
          }.bind(this))
        }
      </ul>
    );
  };
}
