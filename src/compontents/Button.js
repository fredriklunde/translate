import React from 'react';
import LangageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LangageContext;

    render() {
        console.log(this.context);
        return (
            <button className="ui button primary">
                Submit
            </button>
        )
    }
}

export default Button;