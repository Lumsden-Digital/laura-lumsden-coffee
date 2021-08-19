import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

const navlink = {
    marginLeft: '1.8rem'
}

const LinkItem = (props) => {
    return (
        <Link href={props.to} passHref><Nav.Link style={navlink}>{props.children}</Nav.Link></Link>
    )
}

export default LinkItem
