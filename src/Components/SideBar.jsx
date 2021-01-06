import React from 'react';
import {Menu ,Card, } from 'antd';
import {DashboardOutlined, UserSwitchOutlined, ContainerOutlined, MenuFoldOutlined} from '@ant-design/icons';
const SideBar = () => {

    return (
            <Menu style={{width: 230, background: "#ff443b", height: 540}} mode="vertical">
               <Menu.ItemGroup key="01" >
                  <h3 style={{marginLeft: "10px"}}>{<MenuFoldOutlined />} Menu</h3>
                   <Menu.Item key="1" icon={<DashboardOutlined/>}>
                       Dashboard
                   </Menu.Item>
                   <Menu.Item key="1" icon={<UserSwitchOutlined />}>
                       Users
                   </Menu.Item>
                   <Menu.Item key="1" icon={<ContainerOutlined />}>
                       Reports
                   </Menu.Item>
               </Menu.ItemGroup>
            </Menu>
    );
}
export default SideBar;