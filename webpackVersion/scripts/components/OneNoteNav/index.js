/**
 * Author: ZJDGX
 * Date: 2016/05/22 18:52
 * Description: react home page nav list content item
 */

import React from 'react';
import { arrayFind } from '../../Utils';
import PageStyle from '../PageStyle/PageStyle';

require('./index.styl');

export default class OneNoteNav extends React.Component {
   static defaultProps = {
      styles: ['gray', 'deep-green', 'deep-blue', 'red', 'sky-blue', 'magenta', 'yellow', 'purple', 'pink', 'light-green']
   };

   constructor (props) {
      super(props);
      this.state = {
         curIndex: -1,
         contentIndex: -1,
         curContent: null
      };
   };

   changeNavContent (type, index) {
      const cur = this.props.NavList.find((item) => {
            return item.title == type
         });

      this.setState({
         curIndex: index,
         curContent: cur,
         contentIndex: 0
      });

      this.props.setContentUrl(cur.contents[0].url);
   };

   changeContent (url, index) {
      this.setState({contentIndex: index});
      this.props.setContentUrl(url);
   };

   changePageStyle (style) {
      document.querySelector('body').className = style + '-style';
   };

   render () {
      return (
         <div className={'left-sidebar style-bg' + (this.state.curContent ? '' : ' no-content')}>
            <div className='profile'>
               <img className='avatar' src='static/image/logo.png' width='100' height='100' />
               <p>&nbsp;&nbsp;&nbsp;QQ: 373687921</p>
               <p>Phone: 13540273364</p>
            </div>
            <PageStyle styles={this.props.styles} styleIndex={4} changePageStyle={this.changePageStyle.bind(this)} />
            <ul className='nav-list style-bg'>
            {
               this.props.NavList.map((item, index) => {
                  return <li className={'nav-item' + (this.state.curIndex == index ? ' sub-nav-bg' : '')}
                              onClick={this.changeNavContent.bind(this, item.title, index)}>{item.title}</li>
               })
            }
            </ul>
			{
				(function() {
					if (this.state.curContent) {
						return (
							<ul className='nav-content sub-nav-bg'>
							{
							   this.state.curContent.contents.map((item, index) => {
								  return <li key={index}
										   title={item.title}
										   className={this.state.contentIndex == index ? 'cur': ''}
										   onClick={this.changeContent.bind(this, item.url, index)}>{item.title}</li>
							   })
							}
							</ul>
						)
					}
				}.bind(this))()
			}
         </div>
      );
   };
};
