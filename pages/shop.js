import React from 'react'
import Head from 'next/head'
import { Container, CardImgProps, Card } from 'react-bootstrap'

const Shop = () => {

    const books = [
        {
            title: "All Worlds Unseen vol 1: Aurora"
        },
        {
            title: "All Worlds Unseen vol 2: Avalonne"
        },
        {
            title: "Mean Tales and Other Lives"
        },
        {
            title: "Norm’s Attempt"
        },
        {
            title: "Twisted 50"
        }
    ]

    return (
        <div>
            <Head>
                <title>Shop</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* <div className="mx-auto mt-4 px-md-5">   */}
            <Container>  
            <h3 className="section-header my-4">Shop</h3>
            <p>Check out my <a href="https://www.amazon.co.uk/N-W-Twyford/e/B07HZ11ZWC?ref=sr_ntt_srch_lnk_3&qid=1621795620&sr=8-3">Amazon author page</a> for my published work.</p>            
            </Container>
        </div>
      
    )
}

export default Shop
