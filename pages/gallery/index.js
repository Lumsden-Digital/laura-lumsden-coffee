import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

const Gallery = () => {

    const instaUrl = 'https://www.instagram.com/nwtwyford/'

    return (
        <div>
            <Head>
                <title>Gallery</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>  
                <h3 className="section-header my-4">Gallery</h3>
                <p>Some sort of paragraph here to say how great your <a href={instaUrl} target='_blank'>Instagram page</a> is and why people should defo look at it.</p>            
            </Container>
        </div>
    )
}

export default Gallery
