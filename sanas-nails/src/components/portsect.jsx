import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Carousel from 'react-bootstrap/esm/Carousel';
import '../styles/serv.css';

import flower from '../styles/img/blocks/flower.jpg'
import img1 from '../styles/img/portfolio/1.jpg'
import img4 from '../styles/img/portfolio/4.jpg'
import img6 from '../styles/img/portfolio/6.jpg'


function Port() {
    return (
        <Container fluid style={{backgroundColor: 'rgb(222, 210, 194)', padding: '5vw'}}>
            <h2 className='hs'> Get Inspired</h2>
            <p className='ps' style={{textAlign:'center'}}> View my previous work in my portfolio </p>
            <Row className='r1'>
                
                <Col xs={4} className='xs4'>
                    <img src={flower} alt='flower' className='imgflower'/> 
                </Col>   

                <Col xs={4} className='xs4'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className='imgs'
                                src={img1}
                                alt='purple acrylic nails'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='imgs'
                                src={img4}
                                alt='heart design gel nails'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='imgs'
                                src={img6}
                                alt='butterfly dip powder nails'
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col xs={4} className='xs4'>  
                    <img src={flower} alt='flower' className='imgflower'/> 
                </Col>

            </Row>

            <div style={{margin: '50px'}}> </div>
            <div> <a href="portfolio"> PORTFOLIO </a> </div>

        </Container>
    );
}

export default Port;