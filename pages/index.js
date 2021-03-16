import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, CardImgProps, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>N.W.Twyford</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Card className="m-5 p-4">  
          <Card.Title className="text-center mb-4">Nick Twyford</Card.Title>
          <Card.Text>Welcome to my website, which is really a blog posing as a website. (Don’t tell anyone.)
            This site will be the home of All Worlds Unseen, my fantasy series, as well as anything else I put together while not writing Aurora Card stories.
          </Card.Text>
          <Card.Text>
            As we go, I’ll be putting up short stories, links to novels, and any artwork or films that also come about.
            If you like any of it, tell me, tell your friends, or if you don’t have any friends, tell the internet. It’s always listening.
          </Card.Text>
          <Card.Text><strong>About me</strong> (in the third person for reasons I’m not really sure of)</Card.Text>
          <Card.Text>A lifelong fan of film and television, Nick studied Film at Brunel University, received a Masters in Screenwriting at Westminster University, and has worked for the BBC for the last ten years.
            He writes whenever he can (which is quite a lot of the time) and has self published 2 volumes of his young adult fantasy series, All Worlds Unseen, under the titles Aurora and Avalonne. He has also released a sci-fi novel, Space Suits and a comic, Norm’s Attempt.
            He has been lucky enough to have had 2 short stories published as part of the Twisted50 series and will happily submit stories to them until they finally see him for the fraud he is.</Card.Text>          
        </Card>
      </Container>
    </div>
  )
}
