import React from 'react'
import ReactDom from 'react-dom'
import { Input, Table, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Header from '../../component/header'
import Footer from '../../component/footer'
import './index.less'
import Mock from 'mockjs'

const Search = Input.Search
class AppComponent extends React.Component {
  constructor() {
    super()
    let dataMock = Mock.mock({
      'products|45-100': [
        {
          'key|+1': 1,
          'productName': '@title(2, 3)',
          'type|1-3': 3,
          'manager': '@name',
          'fundManager': '@name',
          'riskLevel|1-3': 3,
          'state|1-3': 3,
          'date': '@date("yyyy-MM-dd")'
        }
      ]
    })
    let dataSource = dataMock.products

    const columns = [{
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      render: text => <a href={`../summary/index.html?k=${text}`}>{text}</a>
    }, {
      title: '产品类型',
      dataIndex: 'type',
      key: 'type'
    }, {
      title: '管理人',
      dataIndex: 'manager',
      key: 'manager'
    }, {
      title: '基金经理',
      dataIndex: 'fundManager',
      key: 'fundManager'
    }, {
      title: '风险等级',
      dataIndex: 'riskLevel',
      key: 'riskLevel'
    }, {
      title: '运行状态',
      dataIndex: 'state',
      key: 'state'
    }, {
      title: '发行日期',
      dataIndex: 'date',
      key: 'date'
    }]
    this.state = {
      dataSource,
      columns
    }
  }
  render() {
    let {
      dataSource,
      columns,
      pagination,
      loading
    } = this.state
    return (
      <div>
        <Header />
        <div className="w1200 disclosure">
          <Search className="common-default-btn" placeholder="关键字" enterButton="搜索" size="large" />
          <Table
            className="common-table"
            dataSource={dataSource}
            columns={columns}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
            // size="middle"
          />
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
