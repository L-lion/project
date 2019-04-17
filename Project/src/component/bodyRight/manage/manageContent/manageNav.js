import React from 'react';
import sensorSystem from './img/sensorSystem.png';
import internet from './img/internet.png';
import job from './img/job.png';
import permission from './img/permission.png';
import support from './img/support.png';
import SensorSystem from "./manage_component/sensorSystem";

require('./manageNav.css');
export default class Manage extends React.Component {

    render() {

        return (
            <div className='manage-box'>
                <div className='manage-box-nav'>
                    <ul>
                        <li><img src={sensorSystem} alt=""/><span>传感器系统</span>
                        <p>系统布局和副传感器指派</p></li>
                        <li><img src={internet} alt=""/><span>网络</span><p>IP地址</p></li>
                        <li><img src={job} alt=""/><span>作业</span><p>下载，上传，与设定默认作业</p></li>
                        <li><img src={permission} alt=""/><span>权限</span><p>管理员与技术员密码</p></li>
                        <li><img src={support} alt=""/><span>支持</span><p>用户手册，支持文件与开发包</p></li>
                    </ul>
                </div>
                <div className='manage_content'>
                    <SensorSystem/>
                </div>
            </div>
        );

    }
}

