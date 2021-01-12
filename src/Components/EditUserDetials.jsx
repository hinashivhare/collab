import React, {useState} from 'react';
import {Button, Row, Modal, Form, Input} from 'antd'
import {EditOutlined} from "@ant-design/icons";
import { EditDetails } from '../Actions'
import { connect } from 'react-redux'

const EditUserDetails = (props) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onCancel = () => {
        setVisible(false)
        form.resetFields();
    };

    const onFinish = values => {
        props.EditDetails(values);
        setVisible(false);
        form.resetFields();
    };


    return (
        <div>
            <Button type="text" color="blue" onClick={() => setVisible(true)} icon={<EditOutlined/>}>Edit</Button>
            <Modal
                visible={visible}
                title="User Details"
                footer={null}
                onCancel={onCancel}
            >
                <Row>
                    <Form
                        form={form}
                        name="control-ref"
                        onFinish={onFinish}
                        initialValues={form.setFieldsValue(props.user)}
                    >
                        <Form.Item
                            label="ID"
                            name="id"
                            rules={[
                                {required: true},
                            ]}
                            style={{ display: "none"}}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="avatar"
                            name="avatar"
                            rules={[
                                {required: true},
                            ]}
                            style={{ display: "none"}}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            rules={[
                                {required: true, message: "First Name should not be blank"},
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                                label="Last Name"
                                name="last_name"
                                rules={[
                                    {required: true, message: "Last Name should not be blank"},
                                ]}
                            >
                                <Input/>
                        </Form.Item>
                        <Form.Item
                            label="EmailID"
                            name="email"
                            rules={[
                                {required: true, message: "email should not be blank"},
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item>

                            <Button key="primary"  htmlType="submit">Submit</Button>
                            <Button onClick={onCancel}>Cancel</Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Modal>
        </div>
    );
};

const mapStateTOPROps = state => {
    return {
        editedData: state.users
    }
}

export default connect(mapStateTOPROps, { EditDetails })(EditUserDetails);