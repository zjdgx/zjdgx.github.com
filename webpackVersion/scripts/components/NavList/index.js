/**
 * Author: ZJDGX
 * Date: 2016/04/07
 * Description: react webpack home page
 */

import React from 'react';
import ReactDom from 'react-dom';

import NavItem from './navItem';
import NavContent from './navContent';

require('./index.styl');

export default class NavList extends React.Component {
	constructor () {
		super();
		this.state = {
			curNavIndex: 0
		};
	};

	hideOther (index) {
		this.setState({curNavIndex: index});
	};

	render () {
		return (
			<div className='navList'>
				<div className='logo'>
					<img src='../dist/images/logo.png' />
					<p>ZJDGX</p>
					<span>373687921@qq.com</span>
				</div>
				<ul>
				{
					NavContent.map((item, index) => {
						console.log('index: ' + index + ', cur: ' + (index == this.state.curNavIndex));

						return <NavItem
									key={index}
									list={item.list}
									showNav={index == this.state.curNavIndex}
									category={item.category}
									hideOther={this.hideOther.bind(this)}
									showContent={this.props.showContent}/>
					})
				}
				</ul>
			</div>
		);
	};
}
