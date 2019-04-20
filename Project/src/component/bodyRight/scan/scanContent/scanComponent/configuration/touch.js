import React from 'react';
import {Slider, InputNumber, Row, Col,} from 'antd';

require('./touch.css');
export default class Touch extends React.Component {
    state = {
        inputValue: 0,
    };

    onChange = (value) => {
        if (Number.isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const {inputValue} = this.state;
        return (
            <div className='touch'>


                    <div style={{
                        width: '100%',
                        height:'90px',
                    }}>
                        <p> 周期：</p>
                    <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.01}
                        style={{
                            float:'left',
                            width:'40%'
                        }}
                    />
                    <InputNumber
                        min={0}
                        max={1}
                        step={0.01}
                        value={inputValue}
                        onChange={this.onChange}
                    />&nbsp;&nbsp;&nbsp;μs
                    </div>



            </div>

        );
    }

}