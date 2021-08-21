import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import image from 'next/image'

// *[_type == 'post' && title == 'The Recessionists' ] | order(publishedAt desc) {
//     body
//   } [0]

export const getServerSideProps = async pageContext => {   

    const pageSlug = pageContext.query.post

    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)    
    const url = `https://5n04ir7t.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json())
    const post = result.result[0]

    const imageArrayProp = post.body.map((part, i) => (part._type == 'image' ? part.asset._ref : 'text'))

    if(!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                url: url,
                imageArrayProp
            }
        }
    }
}

const Post = ({ title, body, url, imageArrayProp }) => {

    const [imageArray, setImageArray] = useState(imageArrayProp)
    const [builtImagesArray, setBuiltImagesArray] = useState([])

    const imageBuilder = imageUrlBuilder({
        projectId: '5n04ir7t',
        dataset: 'production'
    })

    useEffect(() => {
        const images = imageArray.map(i => (
            i !== "text" ? imageBuilder.image(i) : i
        ))
        setBuiltImagesArray(images)
    }, [])    

    return (
        <Container className='p-5'>
            <Link href='/blog' passHref><h6 className='btn'>back</h6></Link>            
            <h3 className='section-header py-4'>{title}</h3>

            {body.map((part, i) => {
                if (part._type == 'image') {
                    return (
                        <div key={part._key}>
                            <img 
                                src={builtImagesArray[i]}
                            />
                        </div>                        
                    )
                }

                return (
                    <div key={part._key}>
                        {/* {imageUrl && <img src={imageUrl}/>} */}
                        <p>{part.children[0].text}</p>                        
                    </div>
                )

            })}
            
            <Link href='/blog' passHref><h6 className='btn mt-4'>back</h6></Link>            
        </Container> 
        
    )
}

export default Post
