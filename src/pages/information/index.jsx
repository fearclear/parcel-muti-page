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
    let data = Mock.mock([
      {
        'id|+1': 1
      }
    ]
    )
    console.log(data)
    let dataSource = (() => {
      let tempArr = []
      for(let i = 100; i--;) {
        tempArr.push({
          key: i,
          name: '123',
          age: 13,
          address: 'home'
        })
      }
      return tempArr
    })()

    const columns = [{
      title: '产品名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '产品类型',
      dataIndex: 'age',
      key: 'type'
    }, {
      title: '管理人',
      dataIndex: 'age',
      key: 'admin'
    }, {
      title: '基金经理',
      dataIndex: 'age',
      key: 'manager'
    }, {
      title: '风险等级',
      dataIndex: 'age',
      key: 'rage'
    }, {
      title: '运行状态',
      dataIndex: 'age',
      key: 'state'
    }, {
      title: '发行日期',
      dataIndex: 'address',
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
