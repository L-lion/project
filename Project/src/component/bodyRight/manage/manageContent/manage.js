import React from 'react';

export default class Manage extends React.Component {

    render() {

        return (
            <div>
                <ul>
                    <li><img src="./manage_component" alt=""/><p>传感器系统</p></li>
                    <li><img src="./manage_component/internet.js" alt=""/><p>网络</p></li>
                    <li><img src="./manage_component/job.js" alt=""/><p>作业</p></li>
                    <li><img src="./manage_component/permission.js" alt=""/><p>权限</p></li>
                    <li><img src="./manage_component/support.js" alt=""/><p>支持</p></li>
                </ul>
                <div className='manage_content'>

                </div>
            </div>
        );

    }
}

