import React from 'react'
import ReactDom from 'react-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Header from '../../component/header'
import Footer from '../../component/footer'
import './index.less'

class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="w1200 disclosure">
          <h1 className="title">天弘基金资产</h1>
          <div className="nav" align="center">
            <a href="../summary/index.html"><span>产品详情<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_trend.html"><span>产品业绩<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_cloumn.html"><span>基金经理<em className="rund_half bg_w"></em></span></a>
            <a className="cur" href="/Product_detail_id_317_type_cloumn.html"><span>产品公告<em className="rund_half bg_w"></em></span></a>
            <div className="bottom_line"></div>
          </div>
          <div className="pro_title">
            <h2 className="color_main">产品公告</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  handleTableChange(index) {
    console.log(index)
  }
}
ReactDom.render(
  <LocaleProvider locale={zhCN}>
    <AppComponent />
  </LocaleProvider>,
  // <AppComponent />,
  document.getElementById('root')
)
