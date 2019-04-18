import React from 'React';

export default class Job extends React.Component {

    render() {
        return (
            <div>
                <p>任务</p>
                <hr/>
                <div>
                    <div>
                    </div>
                    <div>
                        名称：<input type="text"/>
                    </div>
                    <div>
                        <ul>
                            <li><input type="button" value='下载'/></li>
                            <li><input type="button" value='上传'/></li>
                            <li><input type="button"/></li>
                            <li><input type="button"/></li>
                            <li><input type="button"/></li>
                            <li><input type="button"/></li>
                        </ul>
                    </div>
                </div>
            </div>


        );
    }


}
