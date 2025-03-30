import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const SideNav = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: '32px', margin: '16px', color: 'white', textAlign: 'center' }}>
          {/* <Title level={4} style={{ color: 'white' }}>Dashboard</Title> */}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            <Link to="/reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  };

export default SideNav;