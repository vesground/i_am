import React from 'react';
import ReactDOM from 'react-dom';
import Header from './routes/Header';
import Body from './routes/Body';

import './index.less';

export default class App extends React.Component {
    state = {
        mode: 'mood', // mood || day
    }

    changeMode() {
        this.setState(prevState => ({ mode: prevState.mode === 'mood' ? 'day' : 'mood' }));
    }

    render() {
        const { mode, showCVAccessDialog } = this.state;

        return (
            <div>
                <Header mode={mode}
                        onModeChange={() => this.changeMode()}
                        showCVAccessDialog={() => this.showCVAccessDialog()} />
                <Body currentMode={mode} />
            </div>
        );
    }
}
