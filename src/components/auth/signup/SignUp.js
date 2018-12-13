import React, { Component } from 'react';
import Input from '../Input';
import { NavLink, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../../actions";
import {bindActionCreators} from "redux";
import Button from "../../Button";
import Text from "../../Text";
import {ModalBasic} from "../../Modal";

class SignUpForm extends Component {

    state = {
        auth: {
            login: '',
            password: '',
            name: '',
            surname: '',
            location: '',
            birthday: '',
            phone: ''
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { signUp } = this.props;
        await signUp(this.state.auth);
    };

    componentWillReceiveProps({ isReg, history }) {return isReg ? history.push("signin") : ''}


    handleChange = e => {
        const { auth } = this.state;
        if (!e) {
            return false
        }
        const {name, value} = e.target;
        this.setState({auth: {...auth, [name]: value}})
    };

    render() {

        const items = ['login', 'password', 'name', 'surname', 'location', 'birthday', 'phone'];
        const types = ['', 'password', '', '', '', '', 'number'];
        const inputFields = () => Array.apply(null, Array(7)).map(
                (e, i) =>
                    <Input type={types[i]} key={i} name={items[i]} onChangeInput={this.handleChange}/>
        );
        return (
            <div className="signup" id="signup">
                {this.props.error ? <ModalBasic classNameText="signup__title" className="signup__modal" container="signup" errorText={this.props.error} /> : ''}
                <form onSubmit={this.handleSubmit}>
                    <h3 className="signup__title">Please register</h3>
                    {inputFields()}
                    <Button htmlType="submit" text="Sign Up"/>
                </form>
                <div className="signup__info">
                    <Text className="signup__question" text="Already registered?"/>
                    <Text className="signup__link" text={<NavLink className="signup__link_btn" exact to='/signin'>Sign In</NavLink>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {
        isReg: auth.isReg,
        error: auth.error
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signUp,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));