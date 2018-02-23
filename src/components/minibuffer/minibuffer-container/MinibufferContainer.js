import React, { Component } from 'react';
import MinibufferMenu from '../minibuffer-menu/MinibufferMenu.js';
import MinibufferEditor from '../minibuffer-editor/MinibufferEditor.js';
import './minibuffer-container.css';

class Minibuffer extends Component {
    constructor (prop) {
        super(prop);
    }

    render () {
        return (
            <footer className="minibuffer">
                <MinibufferMenu />
                <MinibufferEditor />
            </footer>
        );
    }
}

export default Minibuffer;
