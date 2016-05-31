/**
 * Author: ZJDGX
 * Date: 2016/04/07 14:41
 * Description: react webpack home page
 */

import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import ContentItem from './contentItem';

export default class NavItem extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			expanded: false,
			showSubNav: props.showNav
		};
	};
	
	static propTypes = {
		list: PropTypes.array.isRequired,
		hideOther: PropTypes.func.isRequired,
		category: PropTypes.string.isRequired,
		showContent: PropTypes.func.isRequired
	};
	
	toggleContent (index) {
		this.setState({expandedContentIndex: (index ==  this.state.expandedContentIndex ? null : index)});
	};
	
	toggleSubNav () {
		//this.props.hideOther(this.props.index);
	};
	
	render () {
		return (
			<li>
				<h2 onClick={this.toggleSubNav.bind(this)}>{this.props.category}</h2>
				<ul className={'nav2' + (this.state.showSubNav ? ' active' : '')}>
				{
					this.props.list.map((item, index) => {
						let isOpen = this.state.expandedContentIndex == index;
						
						return (
							<li className={'item2' + (isOpen ? ' active' : '')}>
								<h2 onClick={this.toggleContent.bind(this, index)}>{item.title}
									<i className={'fa fa-angle-' + (isOpen ? 'down' : 'right')}></i>
								</h2>
								<ContentItem
									contents={item.contents}
									expanded={isOpen}
									showContent={this.props.showContent} />
							</li>
						);
					})
				}
				</ul>
			</li>
		);
	};
}