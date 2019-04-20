import React from 'react';
import {Input, Button, Form, Select} from 'antd';
import 'antd/dist/antd.css';
import FormItem from "antd/lib/form/FormItem";

const Option = Select.Option;
require('./internet.css');

export default class Internet extends React.Component {
    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    // }

    render() {
        return (
            <div className='internet'>
                <p>网络</p>
                <hr/>
                <Form action="">
                    <FormItem>
                        类型：<Select defaultValue="自动" className='type' style={{width: 259 }}>
                        <Option value="手动">手动</Option>
                    </Select>

                    </FormItem>
                    <FormItem >
                        IP: <Input className='ip'/>
                    </FormItem>

                    <FormItem>
                        子网掩码：<Input className='code'/>
                    </FormItem>

                    <FormItem>
                        网关：<Input className='gate'/>
                    </FormItem>

                    <FormItem>
                        <Button className='save'>保存</Button>
                    </FormItem>

                </Form>
            </div>

        );
    }


}

