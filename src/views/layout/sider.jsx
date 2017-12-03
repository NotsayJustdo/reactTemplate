import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;


class SideBar extends Component {
  constructor(props) {
      super(props)
  }  
  render() {
    return (
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
             <SubMenu key="sub2" title={<span><Icon type="laptop" />{this.props.collapsed? '': 'subnav 2'}</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default SideBar;