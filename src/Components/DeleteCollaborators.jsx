import React, { useState } from 'react';
import {Button, Modal} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import { DeleteUser }  from "../Actions";
import { connect } from "react-redux"

const DeleteCollaborators = (props) => {

    const [visible, setVisible] = useState(false);

    const handleOnCancel = () => {
       setVisible(false);
    }

    const handleOnOk = () => {
        props.DeleteUser(props.user.id);
        setVisible(false)
    }
    return(
        <div>
            <Button type="text" icon={<DeleteOutlined />} onClick={() => setVisible(true)}></Button>
            <Modal
                title = "Warning!!"
                visible = {visible}
                onCancel = {handleOnCancel}
                onOk = {handleOnOk}
            >
             <p>Are you sure that you want to delete your collaborator {props.user.first_name} ?</p>
            </Modal>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        Users: state.users
    }
}

export default connect(mapStateToProps, { DeleteUser })(DeleteCollaborators);