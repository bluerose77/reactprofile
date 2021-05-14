import React, { useState } from 'react'

 function Counter() {
     const [count, setCount] = useState(0);
     
    return (
        <>
            {count}  
            <button className="heart" onClick={() => setCount(count+1)}><i className="fas fa-heart fa-2x"></i></button>
        </>
    )
}

export default Counter