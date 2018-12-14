import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUser } from "../../actions";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";

class Profile extends Component {

    render() {
        if(!this.props.user){
            return <Redirect to="/auth"/>
        } else {
            const { name, surname, kind } = this.props.user;
            const headerInfo = {name, surname, kind};
            return (
                <div className="profile">
                    {/*<Sidebar/>*/}
                    {/*<div style={{flexGrow: '1', backgroundColor: $color}}>*/}
                        {/*Sidebar*/}
                    {/*</div>*/}
                    <div style={{flexGrow: '2'}}>
                        <Header headerInfo={headerInfo} logOutUser={this.props.logOutUser}/>
                        <main>main</main>
                    </div>
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