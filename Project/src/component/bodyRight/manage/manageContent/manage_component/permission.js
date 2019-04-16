import React from 'React';

class Permission extends React.Component {

    render(){
        return(
            <div>
                <p>管理员</p>
                <hr/>
                <form action="">
                    密码： <input type="password"/>
                    确认密码：<input type="password"/>
                    <input type="button" value='更改密码'/>
                </form>
                <hr/>
                <p>技术员</p>
                <hr/>
                <form action="">
                    密码： <input type="password"/>
                    确认密码：<input type="password"/>
                    <input type="button" value='更改密码'/>
                </form>
            </div>


        );
    }
}

export {Permission as default};