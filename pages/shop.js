import React from 'react'
import { Container, CardImgProps, Card } from 'react-bootstrap'

const Shop = () => {

    const books = [
        {
            title: "All Worlds Unseen vol 1: Aurora"
        },
        {
            title: "All Worlds Unseen vol 2: Avalonne"
        },
        {
            title: "Mean Tales and Other Lives"
        },
        {
            title: "Norm’s Attempt"
        },
        {
            title: "Twisted 50"
        }
    ]

    return (
        <Container className='grid'>
            {books.map(book => {    
                return (
                    <Card className="m-5 p-4">  
                        <Card.Title className="text-center">{book.title}</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. Fermentum posuere urna nec tincidunt praesent semper feugiat. Nibh tellus molestie nunc non blandit massa enim nec dui. Sit amet mauris commodo quis. Tristique senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat sed. Viverra nibh cras pulvinar mattis nunc. Vel facilisis volutpat est velit egestas dui id. Metus aliquam eleifend mi in nulla posuere. Ornare suspendisse sed nisi lacus. Nisi est sit amet facilisis magna etiam. At urna condimentum mattis pellentesque. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Nunc scelerisque viverra mauris in aliquam sem fringilla. Ut sem viverra aliquet eget sit amet tellus. Aliquet enim tortor at auctor urna. Ac tortor dignissim convallis aenean et.</Card.Text>          
                    </Card>
                )
            })}
      </Container>
      
    )
}

export default Shop
