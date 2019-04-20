import React, {Component} from 'react';
import image from "../img/image.png";
import {Button} from "antd";
import shape9 from '../img/Shape@2x(9).png';
import shape4 from '../img/Group@2x(4).png';
import shape5 from '../img/Group@2x(5).png';
import shape6 from  '../img/shape6.png';
import shape7 from '../img/shape7.png';
import shape8 from '../img/Shape@2x(8).png';


require('./scanOperation.css');
export default class ScanOperation extends Component {


    render() {
        return (
            <div className="scan-operation">
                <div className='scan-operation-d1'>
                    <Button style={{border: 'none', height: '100px'}}>
                        <img src={shape9} alt=""/>
                        <p>初始化设备</p>
                    </Button>
                    <Button style={{border: 'none', height: '100px'}}>

                        <img src={shape4} alt=""/>
                        <p>开始扫描</p>
                    </Button>
                    <Button style={{border: 'none', height: '100px'}}>
                        <img src={shape8} alt=""/>
                        <p>生成点云</p>
                    </Button>
                </div>

                <div className='scan-operation-d2'>
                    <Button style={{border: 'none', height: '100px'}}>
                        <img src={shape9} alt=""/>
                        <p>初始化设备</p>
                    </Button>
                    <Button style={{border: 'none', height: '100px',padding:'13px'}}>
                        <img src={shape5} alt=""/>
                        <p>一键扫描与生成</p>
                    </Button>
                </div>
                <div className='scan-operation-d3'>
                    <Button style={{border: 'none', height: '100px'}}>
                        <img src={shape6} alt=""/>
                        <p>保存点云&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </Button>
                    <Button style={{border: 'none', height: '100px'}}>
                        <img src={shape7} alt=""/>
                        <p>保存图像</p>
                    </Button>
                </div>

            </div>
        );
    }
}

