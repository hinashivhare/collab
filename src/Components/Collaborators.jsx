import React, {useEffect} from 'react';
import {Row, Col, Card, Pagination, Button} from 'antd'
import {connect} from "react-redux";
import {fetchPageData, fetchUser} from "../Actions";
import { MailOutlined} from '@ant-design/icons'
import EditUserDetails from "./EditUserDetials";
import DeleteCollaborators from "./DeleteCollaborators";

const Collaborators = (props) => {

    useEffect(() => {
        props.fetchUser();
        props.fetchPageData();
    }, [])

    const user = props.Users.users.map(user => {
        return (
            <Col span={6}>
                <Card style={{background: "#ebeff2", margin: "10px" }}>
                    <Row justify="end">
                      <DeleteCollaborators user = {user}/>
                    </Row>
                   <Row justify="center"> <img src={user.avatar}/></Row>
                    <Row className="user_name" justify="center">{user.first_name} {user.last_name}</Row>
                    <Row className="profile_button" justify="space-around">
                        <Col>
                            <Button type="text" href={`mailto:${user.email}`} icon={<MailOutlined />}>Email</Button>
                        </Col>
                        <Col>
                            <EditUserDetails user={user} />
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    })
    const onPaginationChange = (pageNo, pageSize) => {
        props.fetchUser(pageNo);
    };


    return (
        <div>
            <Row>{user}</Row>
            <Row justify="center">
                <Pagination
                    defaultCurrent={1}
                    total={props.Users.totalCount}
                    pageSize={props.Users.perPage}
                    onChange={onPaginationChange}
                />
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        Users: state.users
    };
}

export default connect(mapStateToProps, {fetchUser, fetchPageData})(Collaborators);