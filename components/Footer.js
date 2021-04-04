import React from 'react'
import { Container, Row, Col, FormText } from 'react-bootstrap'

const Footer = () => {
    return (
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Nick Twyford
                    </Col>
                </Row>
            </Container>
    )
}

export default Footer