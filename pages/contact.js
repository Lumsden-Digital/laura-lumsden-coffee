import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container>
            <Card className="m-5 p-4">
                <Card.Text>
                    Thanks for visiting. If you’ve any questions or comments do give me a shout, I’ll endeavour to answer as soon as I can.
                </Card.Text>
                <Card.Text>
                    <p><strong>Email:</strong> nwtwyford@gmail.com</p>
                    <p><strong>Tel:</strong> +44 (0)7703 100037</p>
                </Card.Text>
            </Card>
        </Container>
    )
}

export default Contact
