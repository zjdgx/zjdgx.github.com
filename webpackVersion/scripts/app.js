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
         contentUrl: Contents[0].contents[0].url
      };
   };

   setContentUrl (url) {
      this.setState({contentUrl: url});
   };

   render () {
      return (
         <div className='content'>
      		<NavList setContentUrl={this.setContentUrl.bind(this)} NavList={Contents}/>
            <iframe src={this.state.contentUrl} frameBorder="0" scrolling="0" marginHeight="0" marginWidth="0"></iframe>
      	</div>
      )
   };
}
