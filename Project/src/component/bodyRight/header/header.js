import React from 'react';
require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='header-content'>
                <p className='p1'>账户</p>
                <p className='p2'>464799057@qq.com</p>
                </div>
            </div>
        );

    }
}