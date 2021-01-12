import React from 'react';
import SideBar from "./SideBar";
import {Row, Col} from 'antd'
import Routes from "./Route";
import '../App.css'
import Header from "./Header";

const App = (props) => {

    return (
        <div>
            <Header/>
            <Row>
                    <Col span={4}><SideBar/></Col>
                    <Col span={20}><Routes/></Col>
            </Row>
        </div>
    );
}
 export default App;