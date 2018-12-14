import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUser } from "../../actions";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";

import {subscribeToTimer} from "../../api";

class Profile extends Component {

    state = {
        timestamp: 'no timestamp yet'
    };

    constructor(props) {
        super(props);
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));
    }

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
                        <main>
                            <div id="messages"></div>
                            <form action="" name="chat">
                                <input type="text" name="msg"/>
                                <input type="submit" id="sendMsg"/>
                            </form>

                            This is the timer value: {this.state.timestamp}

                        </main>
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