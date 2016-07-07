/**
 * Author: ZJDGX
 * Date: 2016/04/01
 * Description: react webpack home page
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Contents from './content/navContent';
import NavList from './components/OneNoteNav';

export default class APPView extends React.Component {
   constructor () {
      super();
      this.state = {
         contentUrl: null
      };
   };

   setContentUrl (url) {
      this.setState({contentUrl: url});
   };

   render () {
      return (
         <div className='content'>
      		<NavList setContentUrl={this.setContentUrl.bind(this)} NavList={Contents}/>
			{
				(function () {
					if (this.state.contentUrl) {
						return <iframe src={this.state.contentUrl} frameBorder="0" scrolling="0" marginHeight="0" marginWidth="0"></iframe>
					} else {
						return <div className='layout-center'>
							<img src='static/image/china-map.png' />
						</div>
					}
				}.bind(this))()
			}
      	</div>
      )
   };
}
