import React from 'react'

const LogSign = () => {
    return (
        <div className='user-section'>
            <div className='log-btn'>
                <button onClick={() => alert("Quang, I'm two steps ahead of you. Please stfu :^)")} type="submit">Login</button>
            </div>
            <div className='sign-btn'>
                <button onClick={() => alert("No.")}type="submit">Sign Up</button>
            </div>
            
        </div>
    )
}

export default LogSign
