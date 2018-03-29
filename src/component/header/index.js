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

              <li ><a href='http://bluestoneamc.cn/'>主页</a></li>

              <li><a href='http://bluestoneamc.cn/about/'>关于蓝石</a></li>

              <li><a href='http://bluestoneamc.cn/product/'>产品及业务</a></li>

              <li><a href='/' className="active">信息披露</a></li>

              <li><a href='http://bluestoneamc.cn/news/'>蓝石动态</a></li>

              <li><a href='http://bluestoneamc.cn/job/'>招贤纳士</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
