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
      showClock: true,
      contentUrl: null,
      update: false
    };
  };

  static defaultProps = {
    styleList: ['gray', 'deep-green', 'deep-blue', 'red', 'sky-blue', 'magenta', 'yellow', 'purple', 'pink', 'light-green'],
    styleIndex: Math.floor(Math.random() * 10)
  }

  setContentUrl(url) {
    this.setState({contentUrl: url});
  };

  componentDidMount () {
    if (this.refs['canvas-clock']) {
      var ctx = this.refs['canvas-clock'].getContext('2d');
      
      this.drawClock(ctx);
    }
  };

  drawClock (ctx) {
    setInterval(function() {
      var nowDate = new Date(),
            year = nowDate.getFullYear(),
            month = nowDate.getMonth() + 1,
            date = nowDate.getDate();

      var second = nowDate.getSeconds();
      var minute = nowDate.getMinutes();
      var hour = nowDate.getHours();

      ctx.clearRect(0, 0, 600, 600);
      ctx.beginPath();
      ctx.arc(300, 300, 260, 0, 360 * (Math.PI / 180));
      // 只有弧度
      ctx.strokeStyle='#000';
      ctx.stroke();
      ctx.beginPath();
      ctx.lineCap = "round";
      for (var i = 0; i < 60; i++) {
          if ((i + 5) % 5 === 0) {
              continue;
          }
          ctx.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 250 + 300, Math.sin((i * 6) / 180 * Math.PI) * 250 + 300);
          ctx.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 235 + 300, Math.sin((i * 6) / 180 * Math.PI) * 235 + 300);
      }
      ctx.save();
      ctx.closePath();
      // ctx.shadowOffsetX=-5;
      // ctx.shadowOffsetY=2;
      // ctx.shadowBlur = 20;
      // ctx.shadowColor = "#000";
      ctx.lineWidth = 7;
      ctx.strokeStyle = '#000';
      ctx.stroke();

      ctx.beginPath();
      ctx.lineCap = "round";
      for (var i = 1; i < 13; i++) {
          ctx.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 250 + 300, -Math.sin((i * 30) / 180 * Math.PI) * 250 + 300);
          ctx.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 220 + 300, -Math.sin((i * 30) / 180 * Math.PI) * 220 + 300);
          ctx.font = "50px Arial";
          if (i > 9) {
              ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 180 + 300 - 25, Math.sin((i * 30 - 90) / 180 * Math.PI) * 180 + 300 + 25);
          } else {
              ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 180 + 288, Math.sin((i * 30 - 90) / 180 * Math.PI) * 180 + 300 + 20);
          }
      }
      ctx.lineWidth = 11;
      ctx.strokeStyle = '#000';
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      ctx.beginPath();
      ctx.font = "28px Arial";
      ctx.fillText('ZJDGX LOVE', 213, 380);
      ctx.font = "20px Arial";
      ctx.fillText(year + '年' + month + '月' + date + '日', 233, 405);
      ctx.font = "16px Arial";
      ctx.fillText(['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date().getDay()], 275, 427);
      
      ctx.closePath();

      // 时针
      ctx.beginPath();
      ctx.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 120 + 300, Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 120 + 300);
      ctx.lineTo(300, 300);
      ctx.save();
      ctx.lineCap = "round";
      ctx.closePath();
      ctx.shadowOffsetX = -5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#000";
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#222';
      ctx.stroke();
      ctx.restore();

      // 分针
      ctx.beginPath();
      ctx.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 200 + 300, Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 200 + 300);
      ctx.lineTo(300, 300);
      ctx.save();
      ctx.closePath();
      ctx.shadowOffsetX = -5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#000";
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();
      ctx.restore();

      // 秒针
      ctx.beginPath();
      ctx.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 245 + 300, Math.sin((second * 6 - 90) / 180 * Math.PI) * 245 + 300);
      ctx.lineTo(300, 300);
      ctx.save();
      ctx.closePath();
      ctx.shadowOffsetX = -5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#000";
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgb(213, 153, 0)';
      ctx.stroke();
      ctx.restore();
      ctx.closePath();

      ctx.save();
      ctx.arc(300, 300, 20, 0, Math.PI * 2);
      ctx.shadowOffsetX = -5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#000";
      ctx.fillStyle = 'rgb(213, 153, 0)';
      ctx.fill();
      ctx.restore();
    }, 1000);
  };

  showHomePage () {
    this.setState({contentUrl: null}, () => {
      if (this.state.showClock) {
        this.drawClock(this.refs['canvas-clock'].getContext('2d'));
      }
    });
  };

  render() {
    const importantLinks = Links.Important.map((link, index) => {
      return <a key={index} href={link.url} target='_blank' title={link.title}>{link.title}</a>;
    });

    return (
      <div className={'content ' + this.props.styleList[this.props.styleIndex] + '-style'}>
        <NavList setContentUrl={this.setContentUrl.bind(this)} styleIndex={this.props.styleIndex} updateStyle={() => this.setState({update: new Date().getTime()})} NavList={Contents} showHomePage={this.showHomePage.bind(this)}/>
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
                {!this.state.showClock ? <img className='china-map' src='static/image/china-map.png'/> : <canvas className="canvas-clock" ref="canvas-clock" width="600" height="600"></canvas>}
              </div>
            }
          }.bind(this))()
        }
      </div>
    )
  };
}
