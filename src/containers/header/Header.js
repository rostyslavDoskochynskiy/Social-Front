import React, {Component} from 'react';
import { Icon } from 'antd';
import ava from '../../assets/ava.png';
import Img from "../../components/Img";
import Text from "../../components/Text";
import DropdownComponent from "../../components/Dropdown";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {logOutUser} from "../../actions";

class Header extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    componentWillReceiveProps(props){
        console.log(props);
    }

    render() {

        const { name, surname, kind } = this.props.headerInfo;

        const items = [
            {
                name: 'Edit profile',
                action: ''
            },
            {
                name: 'Settings',
                action: ''
            },
            {
                name: 'Logout',
                action: this.props.logOutUser
            },
        ];

        return (
            <div className="header" id="header">
                <Text className="header__logo" type="span" text={kind}/>
                <div className="header__info">
                    <Text type="span" className="header__user-name" text={name}/>
                    <Text type="span" className="header__user-name" text={surname}/>
                    <Img className="header__img" src={ava} alt="avatar"/>
                </div>
                <DropdownComponent
                    overlay={items}
                    container='header'
                    href="/auth"
                    content={<Icon className="header__drop" type="down"/>}
                    action={this.props.logOutUser}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));