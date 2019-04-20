import React from 'react';
import {Button, Card, Form, Icon} from 'antd';
import 'antd/dist/antd.css';
import Input from "antd/es/input/Input";
import FormItem from "antd/lib/form/FormItem";
require('./login-container.css');


class LoginContent extends React.Component {
    checkAccount(rule, value, callback) {
        const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

        if (re.test(value)) {
            callback();
        } else {
            callback('账号名为邮箱');
        }

    };

    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
this.props.form.validateFields((err,values)=>{
    if(!err){
        console.log('received the value',values);
    }
})
    };
    render() {
        const {getFieldDecorator}=this.props.form;

        return (
            <div className='box'>
                <div className='logo'>
                    <img src="../img/logo.png" alt=""/>
                </div>
                <Card className='login-container'>
                    <Form layout='horizontal'>
                        <FormItem>
                            {
                                getFieldDecorator('e-mail',{
                                    initialValue:'',
                                rules:[{
                                    required:true,
                                    message:'请输入邮箱',
                                },{
                                    validator: this.checkAccount,
                                },]
                            })(
                                    <Input suffix={<Icon type='lock'/>} placeholder='E-mail' />

                                )

                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:'请输入密码',
                                    }]
                                })(
                                    <Input placeholder='Password'/>

                                )

                            }
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(LoginContent);