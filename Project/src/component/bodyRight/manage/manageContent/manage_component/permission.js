import React from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/lib/form/FormItem";
require('./permission.css');

export default class Permission extends React.Component {

    render() {
        return (
            <div className='permission'>
                <p>管理员</p>
                <hr className='permission-hr1'/>
                <div className='admin'>
                    <Form>
                        <FormItem>
                            密码： <Input className='pwd'/>
                        </FormItem>
                        <FormItem>
                            确认密码：<Input className='confirm'/>
                        </FormItem>
                        <FormItem>
                            <Button className='change'>更改密码</Button>
                        </FormItem>

                    </Form>
                </div>
                <hr className='permission-hr2'/>
                <p>技术员</p>
                <hr className='permission-hr2'/>
                <div className='tech'>
                    <Form>
                        <FormItem>
                            密码： <Input className='pwd'/>
                        </FormItem>
                        <FormItem>
                            确认密码：<Input className='confirm'/>
                        </FormItem>
                        <FormItem>
                            <Button className='change'>更改密码</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>


        );
    }
}

