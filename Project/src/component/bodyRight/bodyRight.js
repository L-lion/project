import React from 'react';
import Header from "./header/header";
import ManageNav from "./manage/manageNav";
import RightScan from "./scan/bodyRightScan";
require('./bodyRight.css');

export default class BodyRight extends React.Component {
    render() {
        return (
            <div className='body-right-container'>
                    <Header/>

                    <RightScan/>
            </div>
        );

    }
}