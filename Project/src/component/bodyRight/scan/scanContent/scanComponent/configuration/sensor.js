import React from 'react';
import {Select} from "antd";
const Option = Select.Option;
require('./sensor.css');
export default class Sensor extends React.Component{

    render() {
        return (
           <div className='sensor'>
               <div className='sensor-div'>
                   <p>模式:</p>
                   <Select defaultValue="单目" style={{ width: 150 }}>
                       <Option value="">单目</Option>
                   </Select>
               </div>
               <div className='sensor-div2'>
               <hr/>
               <p>主传感器 1010</p>
               <hr/>
                   <div className='sensor-div2-ul'>
                       <ul>
                           <li><a href="#">有效区域</a></li>
                           <li><a href="#">曝光</a></li>
                           <li><a href="#">点距</a></li>
                           <li><a href="#">高级</a></li>
                       </ul>
                   </div>
                   <div>
                        content
                   </div>
               </div>
           </div>
        );
    }

}