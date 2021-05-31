import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

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

    if(!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                url: url
            }
        }
    }
}

const Post = ({ title, body, url }) => {

    const [imageUrl, setImageUrl] = useState('')

    const foo = 'image-dc1550489483e3c151852f4f59bba7a5802fc09b-605x907-jpg'

    useEffect(() => {
        const imageBuilder = imageUrlBuilder({
            projectId: '5n04ir7t',
            dataset: 'production'
        })

        setImageUrl(imageBuilder.image(foo))
    },[foo])
    // console.log(body[0].children[0].text)
    // console.log(body.map(part => part.children[0].text))
    console.log(body[9].asset._ref)

    return (
        <Container className='p-5'>
            <Link href='/blog' passHref><h6 className='btn'>back</h6></Link>            
            <h3 className='section-header py-4'>{title}</h3>
            {/* {body.map(part => <p>{part.children[0].text}</p>)} */}
            {body.map(part => {
                if (part._type == 'image') {
                    return (
                        // <Image 
                        //     src={part.asset._ref}
                        //     width={500}
                        //     height={500}
                        // />
                        <p>image</p>
                    )
                }

                return (
                    <div>
                        {imageUrl && <img src={imageUrl}/>}
                        <p>{part.children[0].text}</p>                        
                    </div>
                )

            })}
            <Link href='/blog' passHref><h6 className='btn mt-4'>back</h6></Link>            
        </Container> 
        
    )
}


export default Post
