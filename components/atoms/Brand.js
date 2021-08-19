import React from 'react'
import Link from 'next/link'
import { Navbar } from 'react-bootstrap'

const brand = {
    backgroundColor: '#3e3e3e',
    color: 'white',
    fontSize: '1.5rem',
    height: '80%',
    width: '15rem',
    textAlign: 'center',
    borderRadius: '3px',
    marginBottom: '.8rem',
    marginTop: '.8rem',
    // paddingTop: '1rem'
}

const Brand = (props) => {
    return (
        <Link href={props.linkTo} passHref><Navbar.Brand style={brand}>{props.children}</Navbar.Brand></Link>
    )
}

export default Brand
