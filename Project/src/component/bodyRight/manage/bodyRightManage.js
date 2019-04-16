import React, {Component} from 'react';
import Header from "../header/header";
import Manage from "./manageContent/manage";
require('./bodyRightManage.css');

export default class BodyRightManage extends React.Component {
    render() {
        return (
            <div className='body-left-manage'>
                <Header/>
                <p className='body-left-manage-p'>管理</p>
                <div className='body-right-content'>
                    <Manage/>
                </div>
            </div>
        );

    }
}