import React, { Component } from 'react';
import './minibuffer-menu.css';

class MinibufferMenu extends Component {
    constructor(prop) {
        super(prop);
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    render () {
        return (
            <div className="minibuffer-menu">
                <div className="share"></div>
                <div className="mx-navigator"></div>
                <div className="clock"></div>
                <div className="links"></div>
            </div>
        );
    }
}

export default MinibufferMenu;
