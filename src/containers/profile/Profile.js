import React, { Component } from 'react';
import {Redirect, withRouter} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logOutUser} from "../../actions";
import Header from "../header/Header";

class Profile extends Component {

    render() {
        if(!this.props.user){
            // console.log('нема юзера');
            return <Redirect to="/auth"/>
        } else {
            const { name, surname, kind } = this.props.user;
            const headerInfo = {name, surname, kind};
            console.log(this.props.user);
            return (
                <div className="profile">
                    <Header headerInfo={headerInfo} logOutUser={this.props.logOutUser}/>
                </div>
            );
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));