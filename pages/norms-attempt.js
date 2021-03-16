import React from 'react'
import { Container, Card } from 'react-bootstrap'

const NormsAttempt = () => {
    return (
        <div>
            <Container>
                <Card className="m-5 p-4">   
                    <Card.Title className="text-center">Norm's Attempt</Card.Title>
                    <Card.Text>This film is a combination of a comic and a radio play, so is some pretty good recycling.

The story is mine, and features Norm, a character from my All Worlds Unseen series.

Artwork and editing was handled by the remarkably talented Will Chetwynd, and the radio play was directed, recorded and edited by the amazing Matthew Mills. The incredibly versatile Sean Murray plays Norm.</Card.Text>          
                    <iframe 
                        width="420" 
                        height="315"
                        src="https://www.youtube.com/embed/xKrLj52ksHA"
                        className="mt-3 mx-auto"
                    >
                    </iframe>
                </Card>
            </Container>
        </div>
    )
}

export default NormsAttempt
