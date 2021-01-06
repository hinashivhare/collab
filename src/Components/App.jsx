import React, { useEffect } from 'react';
import {fetchUser, fetchPageData} from '../Actions'
import {connect} from 'react-redux'
import Collaborators from "./Collaborators";
import SideBar from "./SideBar";
import {Row, Col, Card, Pagination} from 'antd'
import '../App.css'
import Header from "./Header";

const App = (props) => {

    return (
        <div>
            <Header/>
            <Row>
                <Col span={4}><SideBar/></Col>
                <Col span={20}>{<Collaborators/>}</Col>
            </Row>
        </div>
    );
}
 export default App;