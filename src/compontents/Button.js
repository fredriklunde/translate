import React from 'react';
import LangageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    render() {
        return (
            <button className="ui button primary">
                <LangageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Klar' }
                </LangageContext.Consumer>
            </button>
        )
    }
}

export default Button;