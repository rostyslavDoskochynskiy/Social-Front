import React, { Component } from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logOutUser} from "../../actions";
import Header from "../header/Header";

class Profile extends Component {

    render() {

        const {login, password} = this.props.user;

        return (
            <div className="profile">
                <Header logOutUser={this.props.logOutUser} />
                <h3>{password}</h3>
                <h3>{login}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isAuthenticated: true
    //
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));