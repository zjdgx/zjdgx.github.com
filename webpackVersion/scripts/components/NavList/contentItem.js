/**
 * Author: ZJDGX
 * Date: 2016/04/08 11:28
 * Description: react home page nav list content item
 */
 
import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

export default class ContentItem extends React.Component {
	static propTypes = {
		expanded: PropTypes.bool.isRequired,
		contents: PropTypes.array.isRequired,
		showContent: PropTypes.func.isRequired
	};
	
	showContent (url) {
		this.props.showContent(url);
	};
	
	render () {
		return (
			<ul className={'content-item-container' + (this.props.expanded ? ' expanded' : '')}>
			{
				this.props.contents.map((content, index) => {
					return (
						<li key={index}>
							<a href='#' onClick={this.props.showContent.bind(content.url)}>
								{content.title}
							</a>
						</li>
					);
				})
			}
			</ul>
		);
	};
}