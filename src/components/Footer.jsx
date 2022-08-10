import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <p>MindStore</p>
            <p>© {year}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;