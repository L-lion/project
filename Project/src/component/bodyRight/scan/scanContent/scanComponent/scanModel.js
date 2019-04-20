import React, {Component} from 'react';
import image from "../img/image.png";
import group2x from '../img/Group@2x.png';
import {Button} from "antd";
require('./scanMode.css');

export default class ScanModel extends Component {


    render() {
        return (
            <div className="scan-mode">
                    <Button style={{border:'none',height:'100px'}}>
                    <img src={image} alt=""/>
                    <p>影像</p>
                    </Button>

                    <Button style={{border:'none',height:'100px'}}>
                    <img src={group2x} alt=""/>
                    <p>点云</p>
                    </Button>

            </div>
        );
    }
}

