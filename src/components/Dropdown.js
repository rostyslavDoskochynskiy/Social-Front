import React from 'react';
import {Dropdown, Menu} from "antd";

export default ({overlay, container, href, content}) => {
    const items = <Menu>{overlay.map(({action, name}, i) => <Menu.Item onClick={action} key={i}>{name}</Menu.Item>)}</Menu>;
    return <Dropdown overlay={items} getPopupContainer={() => document.getElementById(container)}>
        <a className="ant-dropdown-link" href={href}>
            {content}
        </a>
    </Dropdown>
}