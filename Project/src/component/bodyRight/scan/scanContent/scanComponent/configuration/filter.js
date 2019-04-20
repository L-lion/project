import React from 'react';
import {Select} from "antd";
const Option = Select.Option;

export default class Filter extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><a href="#">去噪滤波</a></li>
                        <li><a href="#">高斯滤波</a></li>
                        <li><a href="#">均匀点距</a></li>
                        <li><a href="#">降采样</a></li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        );
    }

}