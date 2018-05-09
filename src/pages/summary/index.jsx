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
            <a className="cur" href="/Product_detail_id_317_type_summary.html"><span>产品详情<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_trend.html"><span>产品业绩<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_cloumn.html"><span>基金经理<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_cloumn.html"><span>产品公告<em className="rund_half bg_w"></em></span></a>
            <div className="bottom_line"></div>
          </div>
          <div className="pro_title">
            <h2 className="color_main">产品详情</h2>
          </div>
          <table className="tab_pro_introduce" width="100%">
            <tbody>
              <tr>
                <th width="15%">基金全称</th>
                <td>海富通信泽合晟3号资产管理计划</td>
              </tr>
              <tr>
                <th>管理人</th>
                <td>海富通基金</td>
              </tr>
              <tr>
                <th>投资顾问</th>
                <td>上海合晟资产管理股份有限公司</td>
              </tr>
              <tr>
                <th>成立日期</th>
                <td>2017-09-07</td>
              </tr>
              <tr>
                <th>存续期限</th>
                <td>3年</td>
              </tr>
              {/* <tr>
                <th>开放频率</th>
                <td>每年开放</td>
              </tr>
              <tr>
                <th>组织形式</th>
                <td>自主发行</td>
              </tr>
              <tr>
                <th>托管银行</th>
                <td>中信证券股份有限公司</td>
              </tr>
              <tr>
                <th>开放日期</th>
                <td>未设</td>
              </tr>
              <tr>
                <th>币种</th>
                <td>元</td>
              </tr>
              <tr>
                <th>封闭期</th>
                <td>--</td>
              </tr>
              <tr>
                <th>备案号</th>
                <td>S29635</td>
              </tr>
              <tr>
                <th>成立日期</th>
                <td>2017-09-07</td>
              </tr>
              <tr>
                <th>结构形式</th>
                <td>非结构化</td>
              </tr>
              <tr>
                <th>基金发行人</th>
                <td>汇富恒</td>
              </tr>
              <tr>
                <th>基金状态</th>
                <td>正常</td>
              </tr>
              <tr>
                <th>净值单位</th>
                <td>1</td>
              </tr> */}
            </tbody>
          </table>
          <div className="pro_title">
            <h2 className="color_main">历史分红</h2>
          </div>
          <table className="tab_histry" width="100%">
            <tbody><tr>
              <th>&nbsp;</th>
              <td className="fs_18 color_main">历史分红</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>序号</th>
              <td>分红日期</td>
              <td>分红额</td>
            </tr>
            <tr><td colSpan="3">暂无分红信息!</td>
            </tr></tbody></table>
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
