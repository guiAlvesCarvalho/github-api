import React from 'react';
import * as C from './styles'


const Layout = ({ children }) => {
    return(
        <C.WrapperLayout>
            <header>Header</header>
            {children}
        </C.WrapperLayout>
    )
}

export default Layout