import React, { Component } from 'react';
import './App.css';
import BodyLeft from "./component/bodyLeft/bodyLeft";
import BodyRight from "./component/bodyRight/bodyRight";
import Footer from "./component/footer/footer";

class App extends Component {
    constructor(props) {
        super(props);

        this.saveRef = ref => {this.refDom = ref};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const {clientWidth, clientHeight} = this.refDom;
        console.log(clientWidth, clientHeight, this.refDom);
    }

    render(){
        return (
            <div className="home" ref={this.saveRef} onClick={this.handleClick}>
                <div className='body'>
                    <div className='body-left'>
                        <BodyLeft/>
                    </div>
                    <div className='body-right'>
                        <BodyRight/>
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