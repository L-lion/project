import React, {Component} from 'react';
import logo from '../img/logo.png';
import manage from '../img/manage.png';
import scan from '../img/scan.png';

require('../bodyLeft/bodyLeft.css');


export default class BodyLeft extends React.Component {
    render() {
        return (
            <div className='body-left-nav'>
                <div className='body-left-logo'>
                    <img src={logo} alt=""/>
                </div>
                <a href="">
                    <div className='body-left-manage'>
                        <img src={manage} alt=""/>
                        <p>设置</p>
                    </div>
                </a>
                <a href="">

                <div className='body-left-scan'>
                        <div>
                            <img src={scan} alt=""/>
                            <p>扫描</p>
                        </div>

                </div>
                </a>


            </div>
        );

    }
}