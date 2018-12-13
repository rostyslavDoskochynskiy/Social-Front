import React, { Component } from 'react';
import { Modal } from 'antd';
import Text from "./Text";

export class ModalBasic extends Component {
    state = { visible: false };

    componentWillReceiveProps({errorText}) {
        return errorText.length > 0 ? this.showModal() : ''
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { title, container, errorText, className, classNameText } = this.props;
        const { visible } = this.state;
        return <Modal
                    title={title}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleOk}
                    className={className}
                    getContainer={() => document.getElementById(container)}
                >
                    <Text className={classNameText} text={errorText}/>
                </Modal>
    }
}