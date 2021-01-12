import React, {useState} from 'react';
import {Form, Input, Button, Card, Radio, DatePicker, Checkbox} from 'antd';

const CreateCollaborators = () => {

    const [visible, setVisible] = useState(true);

    const handleOnFinish = () => {
        setVisible(false);
    }

    const prefixSelector = () => {
        return (
            <Form.Item
                name="prefix"
            >
                <Input style={{width: 100}}/>
            </Form.Item>
        );
    }
    return (
        <div>
            {
                visible && <Card>
                <h1>Add a New Collaborator!!</h1>
                <Form style={{width: "75%"}}
                      onFinish={handleOnFinish}
                >
                    <Form.Item
                        visible={visible}
                        label="First Name"
                        name="first_name"
                        rules={[
                            {required: true}
                        ]}
                    >
                        <Input placeholder="provide your first name"/>
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[
                            {required: true}
                        ]}
                    >
                        <Input placeholder="provide your last name"/>
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[
                            {required: true, message: 'Please pick an item!'}
                        ]}
                    >
                        <Radio.Group>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
                            <Radio value="Other">Other</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Birth Date"
                        name="birth_date"
                        rules={[{required: true, message: "Provide your birth date!!"}]}
                    >
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item
                        label="Current Job"
                        name="job"
                    >
                        <Input placeholder="provide your job details"/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="phone_number"
                        rules={[{required: true, message: 'Please provide your phone number!'}]}
                    >
                        <Input addonBefore={prefixSelector()} style={{width: 300}}/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{type: "email", message: "The input is not a valid email id"},
                            {required: true, message: "Please provide your E-mail!"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="terms"
                        valuePropName="checked"
                        rules={[{required: true, message: "Please select the Checkbox"}]}
                    >
                        <Checkbox>Terms & Conditions </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
            }
            {
                !visible && <h1>Collaborator Successfully Created!!</h1>
            }
        </div>
    );
}

export default CreateCollaborators;