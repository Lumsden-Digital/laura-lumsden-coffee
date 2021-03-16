import React from 'react'
import { Card, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Post = ({ title, body }) => {
    // console.log(body[0].children[0].text)
    console.log(body.map(part => part.children[0].text))
    return (
        <Container className='p-5'>
            <Card className='p-5'>
                <Card.Title>{title}</Card.Title>
                {body.map(part => <Card.Text>{part.children[0].text}</Card.Text>)}
            </Card>
        </Container>
    )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug

    if(!pageSlug) {
        return {
            notFound: true
        }
    }
    const thing = `https:5n04ir7t.api.sanity.io/v1/<path>`
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
                body: post.body
            }
        }
    }
}

export default Post
