import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router";

class Welcome extends Component {

    render() {

        return <div>
            <div>Welcome</div>
        </div>
    }
}

export default withRouter(Welcome);