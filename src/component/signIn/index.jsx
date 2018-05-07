import React from 'react'
import { Modal, Row, Col, Checkbox, Input, Icon, Form, Button, message } from 'antd'
import './index.less'

const FormItem = Form.Item

const SignForm = Form.create()(
  class extends React.Component {
    handleSubmit(e) {
      e.preventDefault()
      this.props.form.validateFields((err, values) => {
        if(!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
    signInWechat() {
      message.info('暂未开放微信登录')
    }
    signUp() {
      message.info('暂未开放注册通道')
    }
    forget() {
      message.info('请联系管理员重置密码')
    }
    render() {
      const { getFieldDecorator } = this.props.form
      return (
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请填写已认证的邮箱/手机号码！' }]
            })(
              <Input size="large" className="font" prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="证件号/认证邮箱/手机号码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请设置帐号密码！' }]
            })(
              <Input size="large" className="font" prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="登录密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <p className="content-item">
                <Checkbox defaultChecked={true}>
                  <span className="font">自动登录</span>
                </Checkbox>
                <a className="forget" href="javascript:void(0);" onClick={this.forget.bind(this)}>忘记密码</a>
              </p>
            )}
          </FormItem>
          <FormItem>
            <Button size="large" type="primary" htmlType="submit" className="sign-in">登录</Button>
            <Button size="large" className="sign-in" onClick={this.signInWechat.bind(this)}>微信登录</Button>
            我还没有注册用户？<a href="javascript:void(0)" onClick={this.signUp.bind(this)}>注册</a>
          </FormItem>
        </Form>
      )
    }
  }
)

export default class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  hideModal() {
    this.setState({
      visible: false
    })
  }
  showModal() {
    this.setState({
      visible: true
    })
  }
  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          onOk={this.hideModal.bind(this)}
          onCancel={this.hideModal.bind(this)}
          footer={null}
          width="860px"
        >
          <Row className="login font">
            <Col span={12} className="left">
              <h3 align="center" className="title">合格投资者认定</h3>
              <div className="content">
                <p className="content-item">
                  <Checkbox defaultChecked={true}>
                    <span className="font">我承诺是为自己购买私募产品</span>
                  </Checkbox>
                </p>
                <p className="content-item">
                  <Checkbox defaultChecked={true}>
                    <span className="font">我承诺符合最近三年个人年均收入不低于50万元人民币</span>
                  </Checkbox>
                </p>
                <p className="content-item">
                  <Checkbox defaultChecked={true}>
                    <span className="font">我承诺符合金融类资产不低于300万元；（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等）</span>
                  </Checkbox>
                </p>
                <p className="index-indent content-item">根据《私募投资基金监督管理暂行办法》第四章第十四条规定："私募基金管理人、私募基金销售机构不得向合格投资者之外的单位和个人募集资金，不得通过报刊、电台、电视、互联网等公众传播媒体或者讲座、报告会、分析会和布告、传单、手机短信、微信、博客和电子邮件等方式，向不特定对象宣传推介。"</p>
                <p className="index-indent content-item">蓝石资管谨遵《私募投资基金监督管理暂行办法》之规定，只向特定的合格投资者宣传推介相关私募投资基金产品。</p>
                <p className="index-indent content-item">阁下如有意进行私募投资基金投资且满足《私募投资基金监督管理暂行办法》关于"合规投资者"标准之规定，即具备相应风险识别能力和风险承担能力，投资于单只私募基金的金额不低于100 万元，且个人金融类资产不低于300万元或者最近三年个人年均收入不低于50万元人民币。请阁下详细阅读本提示，并注册成为合晟资产特定的合规投资者，方可获得合晟资产私募投资基金产品宣传推介服务。</p>
              </div>
            </Col>
            <Col span={12} className="right">
              <h3 className="head">
                <span className="title">用户登录</span>
              </h3>
              <div className="content">
                <SignForm />
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}
