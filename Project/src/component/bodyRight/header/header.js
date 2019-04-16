import React, { Component } from 'react';
require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <p>账户</p>
                <p>464799057@qq.com</p>
            </div>
        );

    }
}