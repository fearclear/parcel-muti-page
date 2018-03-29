import React from 'react'
import '../../css/main.css'
export default class Header extends React.Component {
  render() {
    return (
      <div id="footer" className="w1200">
        <div id="f_logo"><img src={require('../../img/footer_logo.png')} /></div>
        <div id="f_right">
          <ul>

            <li><a href='http://bluestoneamc.cn/about/'>关于蓝石</a></li>

            <li><a href='http://bluestoneamc.cn/product/'>产品及业务</a></li>

            <li><a href='http://bluestoneamc.cn/information/'>信息披露</a></li>

            <li><a href='http://bluestoneamc.cn/news/'>蓝石动态</a></li>

            <li><a href='http://bluestoneamc.cn/job/'>招贤纳士</a></li>

          </ul>
          <p style={{ fontSize: '12px', color: '#a2a2a2', marginLeft: '-6px' }}>© BULE STONE  2016      SITEMAP 　　津ICP备16003897号-1　<img src={require('../../img/person.png')} align="absmiddle" /><span > | 　<a href="/link" style={{ color: '#a2a2a2' }}>联系我们</a></span></p>
        </div>
      </div>
    )
  }
}
