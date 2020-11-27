import React from 'react'
import Navbar from './Navbar';

function Layout({children}) {
    return (
        <>
            <Navbar />
            {children}
            <footer>
                FOOTER
            </footer>
        </>
    );
}

export default Layout;