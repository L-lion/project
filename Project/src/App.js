import React, { Component } from 'react';
import './App.css';
import BodyLeft from "./component/bodyLeft/bodyLeft";
import BodyRightManage from "./component/bodyRight/manage/bodyRightManage";
import Footer from "./component/footer/footer";

class App extends Component {
    render() {
        return (
            <div className="home">
                <div className='body'>
                    <div className='body-left'>
                        <BodyLeft/>
                    </div>
                    <div className='body-right'>
                        <BodyRightManage/>
                    </div>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;