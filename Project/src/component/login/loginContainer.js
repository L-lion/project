import React from 'react';
import 'antd/dist/antd.css';
import LoginContent from "./loginContent";
import logo from '../img/logo.png'
require('./login-container.css');
export default class LoginContainer extends React.Component {
    render() {
        return (
            <div className='box'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
                <div>
                <LoginContent/>
                </div>
            </div>
        );
    }
}
