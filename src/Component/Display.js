import React from 'react'

function Display({tech}) {
    return (
        <div>
            <h1>Hi!</h1>
            <div className="tech">{tech}</div>
        </div>
    )
}

export default Display