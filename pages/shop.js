import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { booksTest}  from '../components/test'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import Img from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from '@sanity/client'

const configuredSanityClient = sanityClient({
	projectId: '5n04ir7t',
	dataset: 'production',
	useCdn: true
});

const Shop = ({ books }) => {

    const imageProps = useNextSanityImage(
		configuredSanityClient,
		books[0][0].image.asset._ref
	);

    const [builtImageArray, setBuiltImageArray] = useState([])

    const imageBuilder = imageUrlBuilder({
        projectId: '5n04ir7t',
        dataset: 'production'
    })

    const authorPage = 'https://www.amazon.co.uk/N-W-Twyford/e/B07HZ11ZWC?ref=sr_ntt_srch_lnk_3&qid=1621795620&sr=8-3'

    useEffect(() => {
        const imageArray = books[0].map(b => imageBuilder.image(b.image.asset._ref))
        setBuiltImageArray(imageArray)
    },[])

    console.log(books[0][0].description[0].children[0].text)

    const linkStyle = {

    }

    // console.log(booksTest[0].title)

    return (
        <div>
            <Head>
                <title>Shop</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>  
                <h3 className="section-header my-4">Shop</h3>
                <p>Check out my <a href={authorPage}>Amazon author page</a> for my published work.</p>   
                {books[0].map((book, i) => (
                    <div className='box' key={`${book.title}`}> 
                        {/* <a href={authorPage}> */}
                            <div className='box-content'>
                                <div href={authorPage}>
                                    <h5>{book.title}</h5>
                                </div>
                                {/* <span>{book.description[0].children[0].text}</span> */}
                                {/* <div style={{maxWidth: '200px', maxHeight: '275px'}}>
                                    <img src={builtImageArray[i]} style={{margin: '2.5rem'}}/>
                                </div> */}
                                {/* <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" /> */}
                                <p>{book.description[0].children[0].text}</p>
                            </div>
                        {/* </a> */}
                    </div> 
                ))}         
            </Container>
        </div>
      
    )
}

export default Shop

export const getServerSideProps = async () => {
        
    const query = encodeURIComponent(
        `*[ _type == 'book'] | order(publishedAt desc) {
        title,
        slug,
        image,
        url,
        description,
        publishedAt
      }`
    )
    
    const url = `https://5n04ir7t.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json())

    if (!result.result || !result.result.length) {
        return {
            props: {
                books: []
            }
        }
    } else {
        return {
            props: {
                books: [result.result]
            }
        }
    }
}