import React from 'react';
import {Menu} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import ScanModel from "./scanComponent/scanModel";
import ScanOperation from "./scanComponent/scanOperation";
import Configuration from "./scanComponent/configuration";
require('./scan.css');

export default class Scan extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className='body-right-scan'>
              <iframe>


              </iframe>
                <div className='scan-menu'>
                    <Menu
                        onClick={this.handleClick}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span>扫描模式</span>}  style={{background:'#090E2F',color:'#FFFFFF'}}>
                            <ScanModel/>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span>扫描操作</span>} style={{background:'#090E2F',color:'#FFFFFF'}}>
                            <ScanOperation/>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span>配置</span>} style={{background:'#090E2F',color:'#FFFFFF'}}>
                            <Configuration/>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );

    }
}