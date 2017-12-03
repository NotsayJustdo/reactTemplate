import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import HeaderMenu from './header.jsx';
import SideBar from './sider.jsx';

import '@/style/layout.scss';

class LayoutIndex extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <SideBar collapsed={this.state.collapsed}></SideBar>
        <Layout>
          <HeaderMenu collapsed={this.state.collapsed} callback={ this.toggle.bind(this) }></HeaderMenu>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutIndex;