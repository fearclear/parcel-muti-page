import React from 'react'
import Sign from '../signIn'
import '../../css/main.css'
import './index.less'
export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    document.querySelector('.banner-information').style.backgroundImage = 'url(../../img/banner_information.jpg)'
  }
  login() {
    this.refs.signIn.showModal()
  }
  render() {
    return (
      <div id="head">
        <Sign ref="signIn" />
        <div className="w1200 clearfix">
          {
            process.env.NODE_ENV === 'development'
              ? <img src={require('../../img/logo.png')} id="logo" />
              : <img src="../img/logo.png" id="logo" />
          }
          <div id="menu">
            <ul>

              <li ><a href='http://bluestoneamc.cn/'>主页</a></li>

              <li><a href='http://bluestoneamc.cn/about/'>关于蓝石</a></li>

              <li><a href='http://bluestoneamc.cn/product/'>产品及业务</a></li>

              <li><a href='/' className="active">信息披露</a></li>

              <li><a href='http://bluestoneamc.cn/news/'>蓝石动态</a></li>

              <li><a href='http://bluestoneamc.cn/job/'>招贤纳士</a></li>
            </ul>
            <p>
              <a style={{ color: '#a2a2a2' }} onClick={this.login.bind(this)}>登录</a> |
              <a href="http://bluestoneamc.cn//link" style={{ color: '#a2a2a2' }}> 联系我们</a>
            </p>
          </div>
        </div>
        <div className="banner-information">
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="child-title">信息披露</h2>
            <h3 className="child-info">Information&nbsp;Disclosure</h3>
          </div>
        </div>
      </div>
    )
  }
}
