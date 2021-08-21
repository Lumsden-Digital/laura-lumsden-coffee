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

    const imageArrayProp = post.body.map((part, i) => (part._type == 'image' ? part.asset._ref : 'image'))

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

    const [imageUrl, setImageUrl] = useState('')
    const [imageArray, setImageArray] = useState(imageArrayProp)
    const [testImage, setTestImage] = useState('')

    const foo = 'image-12acf3343ed0abd9af0099bc0da510b1a1477bca-605x907-jpg'

    useEffect(() => {   

        const imageBuilder = imageUrlBuilder({
            projectId: '5n04ir7t',
            dataset: 'production'
        })
        
        setImageUrl(imageBuilder.image(foo))

        // body.map((part, i) => {
        //     if (part._type == 'image') {
        //         setImageArray(imageBuilder.image(part.asset._ref))
        //     }
        // })

        // let images = []
        // body.forEach((part, i) => {
        //     if (part._type == 'image') {
        //         images.push(imageBuilder.image(part.asset._ref))
        //     }
        //     images.push('text')
        // })

        // setImageArray(images)

        console.log(imageArray)

    },[])

    // console.log(body[0].children[0].text)
    // console.log(body.map(part => part.children[0].text))
    // console.log(body[9].asset._ref)
    // console.log(body)

    return (
        <Container className='p-5'>
            <Link href='/blog' passHref><h6 className='btn'>back</h6></Link>            
            <h3 className='section-header py-4'>{title}</h3>
            {/* {body.map(part => <p>{part.children[0].text}</p>)} */}
            {body.map((part, i) => {
                if (part._type == 'image') {
                    return (
                        // <Image 
                        //     src={part.asset._ref}
                        //     width={500}
                        //     height={500}
                        // />
                        <>
                            <img 
                                // src={part.asset._ref}
                                src={imageUrl}
                                // width={500}
                                // height={500}
                            />
                            {/* <p>{imageArray[i]}</p> */}
                        </>
                        
                    )
                }

                return (
                    <div>
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
