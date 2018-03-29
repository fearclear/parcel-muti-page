import React from 'react'
import ReactDom from 'react-dom'
import { Table, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Header from '../../component/header'
import Footer from '../../component/footer'
import './index.less'
class AppComponent extends React.Component {
  constructor() {
    super()
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }]
    this.state = {
      dataSource,
      columns
    }
  }
  render() {
    console.log(this.state)
    let {
      dataSource,
      columns
    } = this.state
    return (
      <div>
        <Header />
        <div className="banner-information">
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="child-title">信息披露</h2>
            <h3 className="child-info">Information&nbsp;Disclosure</h3>
          </div>
        </div>
        <div className="w1200 disclosure">
          <Table dataSource={dataSource} columns={columns} />
        </div>
        <Footer />
      </div>
    )
  }
}
ReactDom.render(
  <LocaleProvider locale={zhCN}>
    <AppComponent />
  </LocaleProvider>,
  // <AppComponent />,
  document.getElementById('root')
)
