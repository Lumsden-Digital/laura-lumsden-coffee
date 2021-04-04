import React from 'react'
import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Layout.module.css'


const Layout = (props) => {

    // const layoutStyle = {
    //     display: "flex",
    //     flexDirection: "column"
    // }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
