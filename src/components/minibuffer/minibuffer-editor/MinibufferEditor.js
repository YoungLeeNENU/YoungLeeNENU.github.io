import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './minibuffer-editor.css';
import { InternalDisplay as Cursor } from '../../welcome/Welcome.js';

class MinibufferEditor extends Component {
    constructor (prop) {
        super(prop);
        this.state = { 
            code: ''
        };
        this.minibufferEditorOptions = {
            lineNumbers: false
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode
        });
    }

    render () {
        return (
            <div className="minibuffer-editor">
                <div className="editor-directive">M-x</div>
                <a href='' className="editor-link">About</a>
                <a href='' className="editor-link">Blog</a>
                <a href='' className="editor-link">Links</a>
                {/* <Cursor type="minibuffer-cursor" /> */}
                <div className="editor-wrapper">
                    <CodeMirror value={this.state.code}
                                onChange={this.updateCode}
                                options={this.minibufferEditorOptions} />
                </div>
            </div>
        );
    }
}

export default MinibufferEditor;
