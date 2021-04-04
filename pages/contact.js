import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container>
            <h3 className="section-header my-4">Contact</h3>
            
                <p style={{marginTop: "2.5rem", textAlign:"center"}}>Thanks for visiting. If you’ve any questions or comments do give me a shout, I’ll endeavour to answer as soon as I can.</p>
                <div className="contact" style={{marginTop: "2.5rem"}}>
                    <p><strong>Email:</strong> nwtwyford@gmail.com</p>
                    <p><strong>Tel:</strong> +44 (0)7703 100037</p>
                </div>
        </Container>
    )
}

export default Contact
