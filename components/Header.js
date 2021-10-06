import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import LinkItem from './atoms/LinkItem'
import Brand from './atoms/Brand'

const Header = () => {

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

    return (
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect className="py-4 nav-bar">
                <Brand linkTo='/'>N.W.Twyford</Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkItem to="/">Home</LinkItem> 
                        <LinkItem to="/blog">Blog</LinkItem> 
                        <LinkItem to="/contact">Contact</LinkItem> 
                        <LinkItem to="/norms-attempt">Norm's Attempt</LinkItem> 
                        <LinkItem to="/shop">Shop</LinkItem>          
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
