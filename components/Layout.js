import React from 'react';
import NaveBare from './NavBar';

function Layout({children}){

    return(
        <div>
            <NaveBare />
            {children}
        </div>
    );
}

export default Layout;