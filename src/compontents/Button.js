import React from 'react';
import LangageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    render() {
        return (
            <ColorContext.Consumer>
            {(color) =>
                    <button className={`ui button ${color}`}>
                    <LangageContext.Consumer>
                        {(value) => value === 'english' ? 'Submit' : 'Klar' }
                    </LangageContext.Consumer>
                </button>
            }
            </ColorContext.Consumer>
        )
    }
}

export default Button;