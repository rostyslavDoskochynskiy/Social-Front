import React from 'react';
import { Menu } from "antd";

export default ({overlay}) => <Menu>
            {overlay.map((e, i) => <Menu.Item onClick={e.action} key={i}>{e.name}</Menu.Item>)}
        </Menu>