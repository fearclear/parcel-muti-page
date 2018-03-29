import React from 'react'
import '../../css/main.css'
export default class Header extends React.Component {
  render() {
    return (
      <div id="head">
        <div className="w1200 clearfix">
          <img src={require('../../img/logo.png')} id="logo" />
          <div id="menu">
            <ul>

              <li ><a href='/' className='active'>主页</a></li>

              <li id="li1"><a href="/about/">关于蓝石</a></li>

              <li id="li2"><a href="/product/">产品及业务</a></li>

              <li id="li3"><a href="/news/">蓝石动态</a></li>

              <li id="li4"><a href="/job/">招贤纳士</a></li>

              <li id="menu_last"><a href="/link">联系我们</a></li>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}
