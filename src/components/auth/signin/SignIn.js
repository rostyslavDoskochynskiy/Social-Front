import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {NavLink, withRouter} from "react-router-dom";
import {signIn} from "../../../actions";
import Input from '../Input';
import Button from "../../Button";
import Text from "../../Text";

class SignInForm extends Component {

    state = {
        auth: {
            login: '',
            password: '',
        },
        error: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state.auth);
    };

    componentWillReceiveProps(props) {
        // console.log('---------')
        if(props.isAuthenticated) {
            this.props.history.push('/profile');
        }
    }


    handleChange = e => {
        if (!e) {
            return false
        }
        const {name, value} = e.target;
        this.setState({auth: {...this.state.auth, [name]: value}})
    };

    render() {
        const items = ['login', 'password'];
        const types = ['', 'password'];
        const inputFields = () => Array.apply(null, Array(2)).map(
            (e, i) =>
                <Input type={types[i]} key={i} name={items[i]} onChangeInput={this.handleChange}/>
        );

        console.log(this.props.isAuthenticated);

        return (
            <div className="signin">
                {/*{this.state.error}*/}
                <form onSubmit={this.handleSubmit}>
                    <h3 className="signin__title">If you are registered already</h3>
                    {inputFields()}
                    <Button htmlType="submit" text="Login"/>
                </form>
                <div className="signin__info">
                    <Text className="signin__question" text="Not registered?"/>
                    <Text className="signin__link"
                          text={<NavLink exact to="/auth" className="signin__link_btn">Create an account</NavLink>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        isAuthenticated: state.auth.loggedIn,
        authChecking: state.auth.initialChecking,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);