import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const Blogs = ({ posts }) => {
    const router = useRouter()
    const postss = posts[0]

    return (
        <Container className='m-5'>
            <div className='grid'>
                {postss.map((post) => {
                    const link = `/blog/${post.slug}`
                    return (
                        <Card>
                            {/* <div onClick={() => router.push(`/blog/${post.slug.current}`)}>{post.title}</div> */}
                            {/* <Link href={`/blog/${post.slug.current}`}>{post.title}</Link> */}
                            <Link href={`/blog/${post.slug.current}`} passHref>{post.title}</Link>
                        </Card>
                    )
                })}
            </div>
        </Container>
    )

}

export const getServerSideProps = async () => {
        
    const query = encodeURIComponent(`*[ _type == "post" ]`)
    
    const url = `https://5n04ir7t.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json())

    if (!result.result || !result.result.length) {
        return {
            props: {
                posts: []
            }
        }
    } else {
        return {
            props: {
                posts: [result.result]
            }
        }
    }
}

export default Blogs
