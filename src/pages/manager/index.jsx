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
            <a className="cur" href="/Product_detail_id_317_type_cloumn.html"><span>基金经理<em className="rund_half bg_w"></em></span></a>
            <a href="/Product_detail_id_317_type_cloumn.html"><span>产品公告<em className="rund_half bg_w"></em></span></a>
            <div className="bottom_line"></div>
          </div>
          <ul className="team_list">
            <li className="fl">
              {
                process.env.NODE_ENV === 'development'
                  ? <img className="mr_30" src={require('../../img/manager_man.gif')} id="logo" />
                  : <img className="mr_30" src="../img/manager_man.gif" id="logo" />
              }
              <span className="arrow"></span>
              <div className="pd_30">
                <h3 className="mb_10">苏李丹<span className="fs_14 pl_10">研究总监</span></h3>
                <p></p><p>
                  <span className="fs_small">清华大学管理学学士、美国华盛顿大学经济学硕士，现任合晟资产研究总监，主管公司固定收益投资的信用评价体系。曾任兴业证券研究所研究员。</span>
                </p><p></p>
              </div>
            </li>
          </ul>
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
