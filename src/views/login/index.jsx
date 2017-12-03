// 登录界面
//样式
import '@/style/login.scss';

import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '@/redux/action/user.jsx';
import { Redirect } from 'react-router-dom';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this;
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            this.props.login(values);
            this.props.history.push('/');
        }
        });
    }
    componentDidMount() {
        this.props.form.setFieldsValue({
            username: this.props.user.username
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div id="loginBg">
            <Form onSubmit={this.handleSubmit} className="login-form" id="loginContainer">
                <FormItem>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名！' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码！' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住密码</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码？</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                </FormItem>
            </Form>
        </div>
        );
    }
}


// redux的相关代码
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({login: login}, dispatch);
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);