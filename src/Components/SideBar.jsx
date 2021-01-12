import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import {
    DashboardOutlined,
    UserSwitchOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const SideBar = () => {

    return (
        <Menu style={{width: 230, background: "#ff443b", height: 540}} mode="vertical">
                <h3 style={{margin: "10px"}}>{<MenuFoldOutlined/>} Menu</h3>
                    <Menu.Item key="1" icon={<DashboardOutlined/>}>
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserSwitchOutlined/>}>
                        <Link to="/create"> Add New Collaborators</Link>
                    </Menu.Item>
        </Menu>
    );
}
export default SideBar;