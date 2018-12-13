import React, {Component} from 'react';
import { Icon } from 'antd';
import ava from '../../assets/ava.png';
import Img from "../../components/Img";
import Text from "../../components/Text";
import DropdownComponent from "../../components/Dropdown";

class Header extends Component {

    render() {

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
                <Text className="header__logo" type="span" text="Logo" />
                <div className="header__info">
                    <Text type="span" className="header__user-name" text="Sebastian Ordenovech" />
                    <Img className="header__img" src={ava} alt="avatar"/>
                </div>
                <DropdownComponent
                    overlay={items}
                    container='header'
                    href="#"
                    content={<Icon className="header__drop" type="down" />}
                    action={this.props.logOutUser}
                />
            </div>
        )
    }
}

export default Header;
