import React from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/lib/form/FormItem";
require('./support.css');
const { TextArea } = Input;

export  default class Support extends React.Component {
    render(){
        return(
            <div className='support'>
                <p className='support-title'>设备信息</p>
                <hr/>
                <div className='info'>
                <p>产品号：313210A-LED-B-01</p>
                <p>序列号：1001</p>
                <p>版本：5.2.18.11</p>
                </div>
                <hr/>

                <p className='support-title'>技术员</p>
                <hr/>

                <div className='support-tech'>
                <p>下载支持文件，其中包含所有任务，数据和传感器当前状态。</p>
                <Form action="">
                    <FormItem>
                文件名：<Input/>
                    </FormItem>
                    描述:
                    <FormItem className='support-des'>

                    <TextArea></TextArea>
                    </FormItem>

                    <FormItem>

                        <Button className='download'>下载</Button>
                    </FormItem>
                </Form>
                </div>
                <hr/>
                <div className='support-user'>
                        <p className='support-title'>用户手册：

                            <Button>打开HTML版本</Button>
                            <Button>下载PDF版本</Button>
                </p>
                </div>
                <hr/>
                <div className='support-develop'>
                <p className='support-title'>软件开发工具包(SDK):
                    <Button className='support-title-download'>下载</Button>
                </p>
                </div>
            </div>

        );
    }


}

