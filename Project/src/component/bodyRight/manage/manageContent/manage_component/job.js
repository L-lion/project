import React from 'react';
import 'antd/dist/antd.css';
import {Button, Form, Input} from "antd";
import FormItem from "antd/lib/form/FormItem";

require('./job.css');

export default class Job extends React.Component {
    render() {
        return (
            <div className='job'>
                <p>任务</p>
                <hr/>
                <div className='job-content'>
                    <div className='job-content-left'>
                        <ul>
                            <li>cylinder head</li>
                            <li>cylinder head</li>
                            <li>cylinder head</li>
                            <li>cylinder head</li>
                            <li>cylinder head</li>
                        </ul>
                        <div className='job-name'>

                            <Form>
                                <FormItem>
                                    名称：
                                    <Input/>
                                </FormItem>
                            </Form>
                        </div>

                    </div>
                    <div className='job-content-right'>

                        <Button>下载</Button>

                        <FormItem>
                            <Button>上传</Button>
                        </FormItem>
                        <div className='job-content-right-down'>

                            <Button>删除</Button>
                            <FormItem>
                                <Button>保存</Button>
                            </FormItem>
                        </div>

                    </div>
                </div>
            </div>


        );
    }


}
