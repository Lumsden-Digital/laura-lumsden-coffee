import React from 'react'
import { Container, Card } from 'react-bootstrap'
import YouTubePlayer from 'react-player'

const NormsAttempt = () => {
    return (
        <div className="container">
            <h3 className="section-header my-4">Norm's Attempt</h3>
            <p>This film is a combination of a comic and a radio play, so is some pretty good recycling.
                The story is mine, and features Norm, a character from my All Worlds Unseen series.
                Artwork and editing was handled by the remarkably talented Will Chetwynd, and the radio play was directed, recorded and edited by the amazing Matthew Mills. The incredibly versatile Sean Murray plays Norm.</p>          
            <div className='video-container'>
                <YouTubePlayer
                    // className="iframe" 
                    url='https://www.youtube.com/watch?v=xKrLj52ksHA'                    
                />
            </div>
            {/* <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe> */}
    </div>
    )
}

export default NormsAttempt
