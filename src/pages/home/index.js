import React from 'react'
import ReactDom from 'react-dom'
import { DatePicker } from 'antd'
import Header from '../../component/header'
import Footer from '../../component/footer'
class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DatePicker />
        <h2>main查看能不能行</h2>
        <Footer />
      </div>
    )
  }
}
ReactDom.render(
  <AppComponent />,
  document.getElementById('root')
)
