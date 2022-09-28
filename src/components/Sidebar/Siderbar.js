import React from "react";
import { Divider, Menu, Layout } from "antd";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { StyledSidebar } from "./Sidebar.style";
import Links from "./Links";
import { ExitIcon } from "../../utils/Images";

const { Sider } = Layout;

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <StyledSidebar>
      <Sider
        breakpoint="lg"
        collapsedWidth="80"
        className="custom-sidebar br-1"
        width="250"
      >
        <div className="sidebar-inner-wrapper">
          <div className="profile-image mb-2"></div>
          <div className="profile-title"></div>
          <Menu
            mode="inline"
            id="sidebar-menu"
            selectedKeys={[location.pathname]}
          >
            {Links.map((item) => {
              const { icon, path, title } = item;
              return (
                <Menu.Item key={path} className="sidebar-item" icon={icon}>
                  <NavLink to={path}>{title}</NavLink>
                </Menu.Item>
              );
            })}
            <Menu.Item
              key="logout"
              onClick={handleLogOut}
              className="sidebar-logOut"
              icon={<ExitIcon />}
            >
              <NavLink to="#" className="log_out">
                Выйти
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </StyledSidebar>
  );
}
