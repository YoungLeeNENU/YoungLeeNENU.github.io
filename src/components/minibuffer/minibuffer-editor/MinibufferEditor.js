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
                <CodeMirror value={`M-x ${this.state.code}`}
                            onChange={this.updateCode}
                            options={this.minibufferEditorOptions} />
            </div>
        );
    }
}

export default MinibufferEditor;
