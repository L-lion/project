import React from 'React';

class Support extends React.Component {

    render(){
        return(
            <div>
                <p>设备信息</p>
                <hr/>
                <p>产品号：313210A-LED-B-01</p>
                <p>序列号：1001</p>
                <p>版本：5.2.18.11</p>
                <hr/>
                <p>技术员</p>
                <hr/>
                <p>下载支持文件，其中包含所有任务，数据和传感器当前状态。</p>
                <form action="">
                文件名：<input type="text"/><br/>
                    描述：<input type="textarea"/>
                    <input type="button" placeholder='下载'/>
                </form>
                <hr/>
                <p>用户手册：<input type="button" placeholder='打开HTML版本'/>
                    <input type="button" placeholder='下载PDF版本'/>
                </p>
                <hr/>
                <p>软件开发工具包(SDK):</p>
                <input type="button" placeholder='下载'/>
            </div>

        );
    }


}

export {Support as default};