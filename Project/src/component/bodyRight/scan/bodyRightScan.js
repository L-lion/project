import React from 'react';
import Scan from "./scanContent/Scan";

require('./bodyRightScan.css');

export default class RightScan extends React.Component {
    render() {
        return (
            <div className='scan-container'>
                <p className='scan-container-p'>扫描</p>
                <Scan/>
            </div>
        );

    }
}