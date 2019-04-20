import React, {Component} from 'react';
import {Menu, Select} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import Touch from "./configuration/touch";
import Sensor from "./configuration/sensor";
import Filter from "./configuration/filter";

require('./configuration.css');
const Option = Select.Option;

export default class Configuration extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="configuration">
                <div className='configuration-div'>
                    <p>配置文件</p>
                    <Select defaultValue="profile1" style={{ width: 150 }}>
                        <Option value="profile">profile</Option>
                    </Select>

                </div>
                <div className='configuration-content'>
                    <Menu
                        onClick={this.handleClick}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span>触发</span>}
                                 style={{background: 'rgba(143,147,180,1)', color: '#FFFFFF'}}>
                            <Touch/>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span>传感器</span>}
                                 style={{background: 'rgba(143,147,180,1)', color: '#FFFFFF'}}>
                            <Sensor/>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span>点云滤波</span>}
                                 style={{background: 'rgba(143,147,180,1)', color: '#FFFFFF'}}>
                            <Filter/>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );
    }
}

