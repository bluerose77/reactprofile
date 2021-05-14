import React from 'react'

function Button({ClickHandler, btntext}) {
    return (
        <div>
            <button onClick ={ClickHandler}>{btntext}</button>
        </div>
    )
}

export default Button
