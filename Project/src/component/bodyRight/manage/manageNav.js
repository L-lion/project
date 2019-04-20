import React from 'react';
import sensorSystem from './manageContent/img/sensorSystem.png';
import internet from './manageContent/img/internet.png';
import job from './manageContent/img/job.png';
import permission from './manageContent/img/permission.png';
import support from './manageContent/img/support.png';
import SensorSystem from "./manageContent/manage_component/sensorSystem";
import Internet from "./manageContent/manage_component/internet";
import Job from "./manageContent/manage_component/job";
import Permission from "./manageContent/manage_component/permission";
import Support from "./manageContent/manage_component/support";
require('./manageNav.css');

export default class Manage extends React.Component {

    render() {

        return (
            <div className='manage-container'>
                <p className='manage-container-p'>设置</p>
                <div className='manage-container-content'>

                <div className='manage-container-content-nav'>
                    <ul>
                        <li><img src={sensorSystem} alt=""/><span>传感器系统</span>
                        <p>系统布局和副传感器指派</p></li>
                        <li><img src={internet} alt=""/><span>网络</span><p>IP地址</p></li>
                        <li><img src={job} alt=""/><span>作业</span><p>下载，上传，与设定默认作业</p></li>
                        <li><img src={permission} alt=""/><span>权限</span><p>管理员与技术员密码</p></li>
                        <li><img src={support} alt=""/><span>支持</span><p>用户手册，支持文件与开发包</p></li>
                    </ul>
                </div>
                <div className='manage-container-content-main'>
                    <Job/>
                </div>
                </div>
            </div>
        );

    }
}

