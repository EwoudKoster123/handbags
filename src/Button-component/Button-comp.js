import React from 'react';

function ButtonName({title}) {
    return (
        <nav>
            <button type="button" className="buttonName">
                {title}
            </button>
        </nav>
    );
}

export default ButtonName;