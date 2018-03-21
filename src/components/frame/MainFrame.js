import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './main-frame.css';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

class MainFrame extends Component {
    constructor () {
        super(...arguments);
    }

    render () {
        return (
            <div className="main-frame"></div>
        );
    }
}

export default MainFrame;
