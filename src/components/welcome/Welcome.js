import React, { Component } from 'react';
import './welcome.css';

class InternalDisplay extends Component {
    constructor(prop) {
        super(prop);
        this.interval = true;
        this.clock = 500;
        this.state = { display: this.interval };
    }

    componentWillMount () {
        this.intervalDisplay = setInterval(()=> {
            this.setState({
                display: this.interval = !this.interval
            });
        }, this.clock);
    }

    componentWillUnmount () {
        clearTimeout(this.intervalDisplay);
    }

    render () {
        return (
            <span className={`title-top ${this.state.display ? 'interval-display' : 'interval-hide'}`}>'</span>
        );
    }
}

class Welcome extends React.PureComponent {
    render () {
        return (
            <div className="ylpn-welcome">
                <h1 className="welcome-title">
                    <span className="title-top">Young Lee</span>
                    {this.props.children}
                    <span className="title-top">s</span>
                </h1>
                <h1 className="welcome-title">
                    <span className="title-bottom">Personal Network</span>
                </h1>
            </div>
        );
    }
}

export default Welcome;
export { InternalDisplay };
