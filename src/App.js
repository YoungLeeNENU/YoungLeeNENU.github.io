import React, { Component } from 'react';

import Minibuffer from './components/minibuffer/minibuffer-container/MinibufferContainer.js';
import MainFrame from './components/frame/MainFrame.js';
import Welcome from './components/welcome/Welcome.js';

import './App.css';

class App extends Component {
    componentWillMount() {}

    render() {
        return (
            <div className="ylpn">
                <Welcome />
                <MainFrame />
                <Minibuffer />
            </div>
        );
    }
}

export default App;
