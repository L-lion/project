import React from 'react';

require('./system.css');

export default class SensorSystem extends React.Component {

    render() {
        return (
            <div className='sensor-system'>

                <p className='sensor-system-title'>传感器</p>

                <hr/>
                <div className='sensor-system-content'>
                    <div>
                        <p className='sensor-system-content-p1'>
                            状态：<span className='sensor-system-content-ready'>就绪  </span>
                        </p>
                        <p className='sensor-system-content-status'>
                            状态：<span>3210</span>
                        </p>
                    </div>
                    <div>
                        <p className='sensor-system-content-p1'>
                            版本：<span>5.2.18.11</span>
                        </p>
                        <p className='sensor-system-content-seri'>

                            序列号：<span>1001</span>
                        </p>
                    </div>
                    <div>
                    <p>
                        Master： <span className='sensor-system-content-master'>未连接</span>
                    </p>
                    </div>

                </div>
            </div>

        );
    }


}

