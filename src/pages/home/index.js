import React from 'react'
import ReactDom from 'react-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Header from '../../component/header'
import Footer from '../../component/footer'
class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>main查看能不能行</h2>
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
