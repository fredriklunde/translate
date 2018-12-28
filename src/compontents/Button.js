import React from 'react';
import LangageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LangageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Klar';
        return (
            <button className="ui button primary">
                {text}
            </button>
        )
    }
}

export default Button;