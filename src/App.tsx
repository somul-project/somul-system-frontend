import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, LabelP1, LabelP2} from "./frameworks/web/components/atoms/Label";

class App extends Component {
  render() {
    return (
        <div>
            <LabelH1>소프트웨어에 물들다</LabelH1>
            <LabelH2>소프트웨어에 물들다</LabelH2>
            <LabelH3>소프트웨어에 물들다</LabelH3>
            <LabelH4>소프트웨어에 물들다</LabelH4>
            <LabelH5>소프트웨어에 물들다</LabelH5>
            <LabelH6>소프트웨어에 물들다</LabelH6>
            <LabelP1>소프트웨어에 물들다</LabelP1>
            <LabelP2>소프트웨어에 물들다</LabelP2>
        </div>

    );
  }
}

export default App;
