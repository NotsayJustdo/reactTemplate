import Cookies from 'js-cookie';

import React, { Component } from 'react';
import { Layout, Icon, Avatar, Dropdown, Menu } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '@/redux/action/user.jsx';

const { Header } = Layout;


class HeaderMenu extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        this.props.logout();
        location.href="/login";
    }
    render() {
        // 用户菜单，包括退出系统等
        const menu =(
            <Menu style={{ minWidth: '100px' }}>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="javascript:;">个人中心</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="javascript:;">切换用户</a>
                </Menu.Item>
                <Menu.Item key="3"><div onClick={this.logout.bind(this)}>退出</div></Menu.Item>
            </Menu>
        );
        return (
            <Header id="header" style={{ background: '#fff', padding: 0 }}>
            <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.callback}
            />
            <div className="userPanel">
                <Avatar src="/static/avatar/avatar.png" />
                <Dropdown overlay={menu} style={{ minWidth: '200px' }}>
                    <a className="ant-dropdown-link" href="javascript:;">{Cookies.get('username')}<Icon type="down"/></a>
                </Dropdown>
            </div>
            </Header>
        );
    }
}

//redux
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout: logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);