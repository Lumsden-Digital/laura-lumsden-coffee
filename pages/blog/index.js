import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { Card, Container } from 'react-bootstrap'

const Blogs = ({ posts }) => {
    // const router = useRouter()
    const thing = posts[0]
    // console.log(thing[0])
    const blogPosts = posts[0]

    const orderedPosts = blogPosts.sort((a,b) => {
        return a.publishedAt - b.publishedAt
    })

    

    // console.log(posts)
    // console.log(orderedPosts)

    // {<div onClick={() => router.push(`/blog/${post.slug.current}`)}>{post.title}</div>}

    return (
        <Container>

            <h3 className="section-header my-4">Blog</h3>

            {orderedPosts.map((post) => {
                const postDateTime = new Date(post.publishedAt);
                const postDate = (postDateTime.toDateString())
                const link = `/blog/${post.slug}`

                return (                                    
                    <div className='box' key={`${post.title}, ${post.publishedAt}`}> 
                        <Link href={`/blog/${post.slug.current}`} passHref>
                            <div className='box-content'>
                                <div>
                                    <h5>{post.title}</h5>
                                </div>
                                <span>{postDate}</span>
                            </div>
                        </Link>
                    </div>                   
                )
            })}
        </Container>
    )
}

export const getServerSideProps = async () => {
        
    const query = encodeURIComponent(
        `*[ _type == 'post'] | order(publishedAt desc) {
        title,
        publishedAt,
        slug
      }`
    )
    
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
