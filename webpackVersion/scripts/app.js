/**
 * Author: ZJDGX
 * Date: 2016/04/01
 * Description: react webpack home page
 */

import React from 'react';
import Contents from './content/navContent';
import NavList from './components/OneNoteNav';
import Links from './links';

export default class APPView extends React.Component {
  constructor() {
    super();
    this.state = {
      contentUrl: null,
      update: false
    };
  };

  setContentUrl(url) {
    this.setState({contentUrl: url});
  };

  render() {
    console.log(Links);
    const linkHtml = Links.map((link, index) => {
      return <a key={index} href={link.url} target='_blank' title={link.title}>{link.title}</a>;
    });

    return (
      <div className='content'>
        <NavList setContentUrl={this.setContentUrl.bind(this)} updateStyle={() => this.setState({update: new Date().getTime()})} NavList={Contents}/>
        {
          (function () {
            if (this.state.contentUrl) {
              return <iframe src={this.state.contentUrl + '?' + this.state.update} frameBorder="0" scrolling="0" marginHeight="0"
                             marginWidth="0"></iframe>
            } else {
              return <div className='layout-center'>
                <div className='useful-links'>{linkHtml}</div>
                <img className='china-map' src='static/image/china-map.png'/>
              </div>
            }
          }.bind(this))()
        }
      </div>
    )
  };
}
