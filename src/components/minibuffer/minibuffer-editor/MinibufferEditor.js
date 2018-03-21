import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './minibuffer-editor.css';

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
