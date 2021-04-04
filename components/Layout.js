import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Layout = (props) => {

    // const layoutStyle = {
    //     display: "flex",
    //     flexDirection: "column"
    // }

    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
