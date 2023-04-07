import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  MenuOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="">DashBoard</Link>, "1", <DashboardOutlined />),
  getItem(<Link to="categories">Categories</Link>, "2", <MenuOutlined />),
  getItem(<Link to="products">Products</Link>, "3", <MobileOutlined />),
];

const HeaderAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default HeaderAdmin;
