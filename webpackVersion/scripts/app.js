/**
 * Author: ZJDGX
 * Date: 2016/04/01
 * Description: react webpack home page
 */

import React from 'react';
import Contents from './content/navContent';
import { Menu, Dropdown, Icon, Button } from 'antd';
import NavList from './components/OneNoteNav';
import Links from './links';
import SourceLinks from './links/web-source';

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

    const importantLinks = Links.Important.map((link, index) => {
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
                <div className='useful-links'>
                  <div className='group-links'>
                  {
                    (function () {
                      let groups = [];
                      for (let i in Links) {
                        if (i != 'Important') {
                          let menu = <Menu>
                                {
                                  Links[i].map( (link, index) => {
                                    return <Menu.Item key={i+index}>
                                            <a target="_blank" href={link.url}>{link.title}</a>
                                          </Menu.Item>
                                  })
                                }
                              </Menu>;

                          groups.push(<Dropdown overlay={menu}>
                            <Button style={i != 'CSS' ? { marginLeft: 8 } : {}}>
                              {i}<Icon type="down" />
                            </Button>
                          </Dropdown>)
                        }
                      }
                      return groups;
                    })()
                  }
                  </div>
                  <div className='important-links'>
                    {importantLinks}
                  </div>
                  <div className="blog-links">
                  {
                    SourceLinks.contents.map( (link, index) => {
                      return <a href={link.url} target="_blank">{link.title}</a>
                    })
                  }
                  </div>
                </div>
                <img className='china-map' src='static/image/china-map.png'/>
              </div>
            }
          }.bind(this))()
        }
      </div>
    )
  };
}
