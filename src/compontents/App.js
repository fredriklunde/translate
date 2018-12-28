import React from 'react';

class App extends React.Component {
    state = { language: 'english'}

    render() {
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i className="flag us" />
                    <i className="flag se" />
                </div>
            </div>
        )
    }
}

export default App;