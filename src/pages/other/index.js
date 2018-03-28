import React from 'react'
import ReactDom from 'react-dom'
import { Card } from 'antd'
import Header from '../../component/header'
import Footer from '../../component/footer'
class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <h2>main</h2>
        <Footer />
      </div>
    )
  }
}
ReactDom.render(
  <AppComponent />,
  document.getElementById('root')
)
