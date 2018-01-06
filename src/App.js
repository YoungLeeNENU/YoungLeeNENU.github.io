import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentWillMount() {
        if ('commonCallback' in window) {
            const params = {
                func: 'getContainerInfo'
            };
            window.commonCallback({
                request: JSON.stringify(params),
                onSuccess(res) {
                    alert(res);
                },
                onFailure() {
                    // TODO: 
                }
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Younglee Lee's Personal Network</h1>
                </header>
            </div>
        );
    }
}

export default App;
