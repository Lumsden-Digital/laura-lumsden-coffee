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
                <p>We could either hook up this page to Instagram itself to display a, perhaps random selection, or we could connect it to the CMS so you can select them yourself and change them round whenever.</p>            
                <p>Otherwise we could keep it really simple and just have this as an entry point to your Insta page.</p>
            </Container>
        </div>
    )
}

export default Gallery
