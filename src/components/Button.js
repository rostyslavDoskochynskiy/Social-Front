import { Button } from "antd";
import React from "react";

export default ({htmlType, action, className, text}) => <Button htmlType={htmlType} className={className} onClick={action}>{text}</Button>
