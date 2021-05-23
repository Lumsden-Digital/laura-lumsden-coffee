import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

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
    // console.log(body[0].children[0].text)
    // console.log(body.map(part => part.children[0].text))
    console.log(body)
    console.log(url)
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

                return <p>{part.children[0].text}</p>
            })}
            <Link href='/blog' passHref><h6 className='btn mt-4'>back</h6></Link>            
        </Container> 
        
    )
}


export default Post
