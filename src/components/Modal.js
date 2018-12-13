import React, { Component } from 'react';
import { Modal } from 'antd';
import Text from "./Text";

export class ModalBasic extends Component {
    state = { visible: false, errorText: '' };

    componentWillMount(){
        const { errorText } = this.props;
        this.setState({ errorText});
        return this.showModal();
    }

    componentWillUnmount() {
        this.setState({errorText: ''})
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
        const { title, container, className, classNameText } = this.props;
        const { visible, errorText } = this.state;
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