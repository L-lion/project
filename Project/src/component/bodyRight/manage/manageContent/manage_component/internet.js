import React from 'react';
require('./internet');

export default class Internet extends React.Component {

    render(){
        return(
                <div className='internet'>
                    <p>网络</p>
                    <hr/>

                    <form action="">
                        类型：<input type="text"/>
                        IP: <input type="text"/>
                        子网掩码：<input type="text"/>
                        网关：<input type="text"/>
                        <input type="button" value='保存'/>
                    </form>
                </div>

        );
    }


}

