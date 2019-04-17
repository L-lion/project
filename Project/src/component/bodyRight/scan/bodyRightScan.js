import React, {Component} from 'react';
import Header from "../header/header";
import ManageNav from "./manageContent/manageNav";
require('./bodyRightManage.css');

export default class BodyRightManage extends React.Component {
    render() {
        return (
            <div className='body-right-manage'>
                <Header/>
                <p className='body-right-manage-p'>扫描</p>
                <div className='body-right-content'>
                    <ManageNav/>
                </div>
            </div>
        );

    }
}